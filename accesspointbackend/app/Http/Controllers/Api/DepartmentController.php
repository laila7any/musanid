<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\Request;
use App\Models\RequestDepartment;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Services\TelegramService;

class DepartmentController extends Controller
{
    public function index()
    {
        $departments = Department::all();
        return response()->json($departments);
    }

    public function show(Department $department)
    {
        return response()->json($department);
    }

    public function store(HttpRequest $request)
    {
        $user = Auth::user();
        
        if (!$user->isAdmin()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|unique:departments',
            'email' => 'required|email|unique:departments',
            'phone' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $department = Department::create($request->all());
        return response()->json($department, 201);
    }

    public function update(HttpRequest $request, Department $department)
    {
        $user = Auth::user();
        
        if (!$user->isAdmin()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|string|max:255|unique:departments,name,' . $department->id,
            'email' => 'sometimes|email|unique:departments,email,' . $department->id,
            'phone' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $department->update($request->all());
        return response()->json($department);
    }

    public function destroy(Department $department)
    {
        $user = Auth::user();
        
        if (!$user->isAdmin()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $department->delete();
        return response()->json(['message' => 'Department deleted successfully']);
    }

    public function departmentRequests(HttpRequest $request)
    {
        $user = Auth::user();
        
        if (!$user->isAdmin()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $query = Request::with(['departments.department', 'student'])
            ->whereHas('departments');

        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        if ($request->has('department_id')) {
            $query->whereHas('departments', function ($q) use ($request) {
                $q->where('department_id', $request->department_id);
            });
        }

        $requests = $query->orderBy('created_at', 'desc')->paginate(10);
        return response()->json($requests);
    }

public function assignToDepartment(HttpRequest $request, Request $requestModel)
{
    $user = Auth::user();
    if (!$user->isAdmin()) {
        return response()->json(['message' => 'Unauthorized'], 403);
    }

    $validator = Validator::make($request->all(), [
        'department_id' => 'required|exists:departments,id',
    ]);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }

    // Check for null ID (debugging)
    if (!$requestModel->id) {
        \Log::error('Assign failed: request model ID is null', ['requestModel' => $requestModel]);
        return response()->json(['message' => 'Invalid request ID'], 400);
    }

    // Prevent duplicate assignments
    $existing = RequestDepartment::where('request_id', $requestModel->id)
                                 ->where('department_id', $request->department_id)
                                 ->first();
    if ($existing) {
        return response()->json(['message' => 'Department already assigned to this request'], 422);
    }

    $created = RequestDepartment::create([
        'request_id' => $requestModel->id,
        'department_id' => $request->department_id,
        'status' => 'pending'
    ]);

    return response()->json(['message' => 'Request assigned to department successfully', 'data' => $created]);
}

    public function reviewRequest(HttpRequest $request, RequestDepartment $requestDepartment)
    {
        $user = Auth::user();
        
        if (!$user->isAdmin()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validator = Validator::make($request->all(), [
            'status' => 'required|in:approved,rejected,needs_more_info',
            'comments' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }


            $requestDepartment->update([
        'status' => $request->status,
        'comments' => $request->comments,
        'reviewed_by' => $user->id,
        'reviewed_at' => now(),
    ]);

    // Update overall request status
    $this->updateOverallRequestStatus($requestDepartment->request);

    // ----- Telegram notification -----
    $student = $requestDepartment->request->student;
    if ($student->telegram_chat_id) {
        $message = $this->buildTelegramMessage($requestDepartment);
        app(TelegramService::class)->sendMessage($student->telegram_chat_id, $message);
    }
    // ----- end -----

        return response()->json(['message' => 'Review submitted successfully']);

        // -------------------
        
    }

    // FIXED: Renamed from updateRequestStatus to updateRequestStatusDirect
    public function updateRequestStatusDirect(HttpRequest $request, Request $requestModel)
    {
        $user = Auth::user();
        
        if (!$user->isAdmin()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validator = Validator::make($request->all(), [
            'status' => 'required|in:draft,submitted,in_review,approved,rejected,completed',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $requestModel->update(['status' => $request->status]);
        return response()->json(['message' => 'Request status updated']);
    }

    // FIXED: Changed to private and different name
    private function updateOverallRequestStatus(Request $request)
    {
        $overallStatus = $request->overall_status;
        if ($request->status !== $overallStatus) {
            $request->update(['status' => $overallStatus]);
        }
    }
}