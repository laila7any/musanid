<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Request;
use App\Models\Department;
use App\Models\RequestDepartment;
use App\Models\User;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Services\TelegramService;
use Illuminate\Support\Facades\Log;
use App\Models\Request as RequestModel;

class RequestController extends Controller
{

    public function index(HttpRequest $request)
    {
        $user = Auth::user();
        $query = Request::with(['departments.department', 'student']);
        
        if ($user->isStudent()) {
            $query->where('student_id', $user->id);
        }
        // Admin sees all requests automatically
        
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }
        
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhere('request_type', 'like', "%{$search}%");
            });
        }
        
        $requests = $query->orderBy('created_at', 'desc')->paginate(10);
        
        return response()->json($requests);
    }

    public function allRequests(HttpRequest $request)
    {
        $user = Auth::user();
        
        if (!$user->isAdmin()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $query = Request::with(['departments.department', 'student']);
        
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }
        
        if ($request->has('student_id')) {
            $query->where('student_id', $request->student_id);
        }
        
        $requests = $query->orderBy('created_at', 'desc')->paginate(10);
        return response()->json($requests);
    }

public function store(HttpRequest $httpRequest)
{
    $user = Auth::user();
    if (!$user) {
        return response()->json(['message' => 'Unauthenticated.'], 401);
    }

    // Validation...
    $validator = Validator::make($httpRequest->all(), [
        'request_type' => 'required|string|max:255',
        'title' => 'required|string|max:255',
        'description' => 'required|string',
        'details' => 'nullable|string',
        'priority' => 'required|in:low,medium,high',
        'needed_by' => 'nullable|date|after_or_equal:today',
        'department_ids' => 'required|array|min:1',
        'department_ids.*' => 'exists:departments,id',
    ]);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }

    try {
        $request = Request::create([
            'student_id' => $user->id,
            'request_type' => $httpRequest->request_type,
            'title' => $httpRequest->title,
            'description' => $httpRequest->description,
            'details' => $httpRequest->details,
            'priority' => $httpRequest->priority,
            'status' => 'submitted',
            'needed_by' => $httpRequest->needed_by,
        ]);

        foreach ($httpRequest->department_ids as $deptId) {
            RequestDepartment::create([
                'request_id' => $request->id,
                'department_id' => $deptId,
                'status' => 'pending',
            ]);
        }

        $request->load('departments.department');
        return response()->json($request, 201);
    } catch (\Exception $e) {
        \Log::error('Request store error: ' . $e->getMessage(), [
            'trace' => $e->getTraceAsString(),
            'data' => $httpRequest->all()
        ]);
        return response()->json(['error' => 'Internal Server Error'], 500);
    }
}
// ------------------------------------------------------------------------------
public function sendTelegramNotification(RequestModel $request) // ← parameter is now $request
{
    $user = Auth::user();
    if (!$user->isAdmin()) {
        return response()->json(['message' => 'Unauthorized'], 403);
    }

    $request->load('student');               // was $requestModel->load('student')
    $student = $request->student;            // was $requestModel->student

    if (!$student) {
        \Log::warning('Orphaned request', [
            'request_id' => $request->id,    // was $requestModel->id
            'student_id' => $request->student_id
        ]);
        return response()->json(['message' => 'Student not found for this request'], 400);
    }

    if (!$student->telegram_chat_id) {
        return response()->json(['message' => 'Student has not set a Telegram chat ID'], 400);
    }

    if (!is_numeric($student->telegram_chat_id)) {
        return response()->json(['message' => 'Invalid Telegram chat ID format. It should be a number.'], 400);
    }

    try {
        $message = $this->buildTelegramMessage($request); // was $requestModel
        $telegram = app(TelegramService::class);
        $result = $telegram->sendMessage($student->telegram_chat_id, $message);

        if ($result) {
            return response()->json(['message' => 'Telegram notification sent successfully.']);
        } else {
            return response()->json(['message' => 'Failed to send Telegram message. Check logs for details.'], 500);
        }
    } catch (\Exception $e) {
        \Log::error('Telegram notification error: ' . $e->getMessage());
        return response()->json(['message' => 'An internal error occurred. Please check the logs.'], 500);
    }
}

private function buildTelegramMessage(Request $request)
{
    $statusEmoji = [
        'submitted' => '📝',
        'in_review' => '🔍',
        'approved' => '✅',
        'rejected' => '❌',
        'completed' => '🎉',
    ][$request->status] ?? '🔄';

    $message = "{$statusEmoji} *Request Update*\n\n";
    $message .= "Your request *#{$request->id}* status is now: *{$request->status}*.\n";
    $message .= "Title: {$request->title}\n";
    $message .= "\nCheck your dashboard for details.";

    return $message;
}
// ------------------------------------------------------------------------------


    private function getDepartmentKeywords($departmentName)
    {
        $mapping = [
            'Academic' => ['exam', 'test', 'time', 'course', 'class'],
            'Student' => ['support', 'help', 'general', 'accommodation'],
            'Disability' => ['disability', 'accessible', 'special', 'interpreter'],
            'Library' => ['book', 'material', 'resource', 'library'],
            'Transportation' => ['transport', 'travel', 'campus', 'movement'],
            'Facilities' => ['seat', 'room', 'facility', 'building'],
        ];
        
        foreach ($mapping as $key => $keywords) {
            if (str_contains($departmentName, $key)) {
                return $keywords;
            }
        }
        
        return ['general'];
    }

    public function show(Request $request)
    {
        $user = Auth::user();
        
        // Student can only view their own requests
        if ($user->isStudent() && $request->student_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        
        return response()->json($request->load(['departments.department', 'student']));
    }

    public function update(HttpRequest $httpRequest, Request $requestModel)
    {
        $user = Auth::user();
        
        // Only admin can update requests (students can only create and view)
        if (!$user->isAdmin()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validator = Validator::make($httpRequest->all(), [
            'status' => 'sometimes|in:draft,submitted,in_review,approved,rejected,completed',
            'priority' => 'sometimes|in:low,medium,high',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $requestModel->update($httpRequest->all());
        return response()->json($requestModel);
    }

    public function destroy(Request $request)
    {
        $user = Auth::user();
        
        // Only admin can delete requests
        if (!$user->isAdmin()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $request->delete();
        return response()->json(['message' => 'Request deleted successfully']);
    }

    // Additional methods for student requests
    public function myRequests(HttpRequest $request)
    {
        $user = Auth::user();
        
        if (!$user->isStudent()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $query = $user->requests()->with(['departments.department']);
        
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }
        
        $requests = $query->orderBy('created_at', 'desc')->paginate(10);
        return response()->json($requests);
    }

    public function cancelRequest(Request $requestModel)
    {
        $user = Auth::user();
        
        // Student can only cancel their own requests
        if (!$user->isStudent() || $requestModel->student_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        // Only allow cancellation if request is in draft or submitted status
        if (!in_array($requestModel->status, ['draft', 'submitted'])) {
            return response()->json(['message' => 'Cannot cancel request in current status'], 400);
        }

        $requestModel->update(['status' => 'cancelled']);
        return response()->json(['message' => 'Request cancelled successfully']);
    }

    public function withdrawRequest(Request $requestModel)
    {
        $user = Auth::user();
        
        // Student can only withdraw their own requests
        if (!$user->isStudent() || $requestModel->student_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        // Only allow withdrawal if request is in review
        if ($requestModel->status !== 'in_review') {
            return response()->json(['message' => 'Cannot withdraw request in current status'], 400);
        }

        $requestModel->update(['status' => 'withdrawn']);
        return response()->json(['message' => 'Request withdrawn successfully']);
    }

    public function dashboardStats()
    {
        $user = Auth::user();
        
        if ($user->isStudent()) {
            $stats = [
                'total' => $user->requests()->count(),
                'submitted' => $user->requests()->where('status', 'submitted')->count(),
                'in_review' => $user->requests()->where('status', 'in_review')->count(),
                'approved' => $user->requests()->where('status', 'approved')->count(),
                'rejected' => $user->requests()->where('status', 'rejected')->count(),
                'completed' => $user->requests()->where('status', 'completed')->count(),
            ];
        } else {
            // Admin stats
            $stats = [
                'total_requests' => Request::count(),
                'pending_reviews' => Request::where('status', 'in_review')->count(),
                'today_requests' => Request::whereDate('created_at', today())->count(),
                'approved_today' => Request::whereDate('created_at', today())->where('status', 'approved')->count(),
                'total_students' => User::where('role', 'student')->count(),
                'total_admins' => User::where('role', 'admin')->count(),
            ];
        }
        
        return response()->json($stats);
    }

    public function recentRequests()
    {
        $user = Auth::user();
        
        if ($user->isStudent()) {
            $requests = $user->requests()
                ->with(['departments.department'])
                ->orderBy('created_at', 'desc')
                ->limit(5)
                ->get();
        } else {
            $requests = Request::with(['departments.department', 'student'])
                ->orderBy('created_at', 'desc')
                ->limit(5)
                ->get();
        }
        
        return response()->json($requests);
    }

    public function systemStats()
    {
        $user = Auth::user();
        
        if (!$user->isAdmin()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        
        $stats = [
            'total_users' => User::count(),
            'total_students' => User::where('role', 'student')->count(),
            'total_admins' => User::where('role', 'admin')->count(),
            'total_requests' => Request::count(),
            'requests_by_status' => Request::groupBy('status')->selectRaw('status, count(*) as count')->get(),
            'requests_by_type' => Request::groupBy('request_type')->selectRaw('request_type, count(*) as count')->limit(10)->get(),
            'requests_by_month' => Request::selectRaw('DATE_FORMAT(created_at, "%Y-%m") as month, count(*) as count')
                ->groupBy('month')
                ->orderBy('month', 'desc')
                ->limit(6)
                ->get(),
        ];
        
        return response()->json($stats);
    }

    public function generateReport()
    {
        $user = Auth::user();
        
        if (!$user->isAdmin()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        
        // Simple report generation
        $report = [
            'summary' => [
                'total_requests' => Request::count(),
                'pending_requests' => Request::whereIn('status', ['submitted', 'in_review'])->count(),
                'resolved_requests' => Request::whereIn('status', ['approved', 'rejected', 'completed'])->count(),
                'cancelled_requests' => Request::whereIn('status', ['cancelled', 'withdrawn'])->count(),
            ],
            'top_request_types' => Request::groupBy('request_type')
                ->selectRaw('request_type, count(*) as count')
                ->orderBy('count', 'desc')
                ->limit(5)
                ->get(),
            'performance_metrics' => [
                'avg_response_time' => '2.5 days', // You would calculate this from your data
                'approval_rate' => '85%',
                'rejection_rate' => '10%',
                'pending_rate' => '5%',
            ]
        ];
        
        return response()->json($report);
    }
}