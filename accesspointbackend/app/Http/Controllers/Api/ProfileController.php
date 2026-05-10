<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{

    public function show()
    {
        $user = Auth::user();
        return response()->json($user);
    }

public function update(Request $request)
{
    $user = Auth::user();

    $validator = Validator::make($request->all(), [
        'firstName' => 'sometimes|string|max:255',
        'lastName'  => 'nullable|string|max:255',
        'email'     => 'sometimes|email|unique:users,email,' . $user->id,
        'phone'     => 'nullable|string|max:20',
        'studentId' => 'nullable|string|unique:users,studentId,' . $user->id,
        'disability_info' => 'nullable|string',
        'telegram_chat_id' => 'nullable|string|max:255',
    ]);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }

    $user->update([
        'firstName' => $request->firstName,
        'lastName'  => $request->lastName,
        'email'     => $request->email,
        'phone'     => $request->phone,
        'studentId' => $request->studentId,
        'disability_info' => $request->disability_info,
        'telegram_chat_id' => $request->telegram_chat_id,
    ]);

    return response()->json([
        'message' => 'Profile updated successfully',
        'user'    => $user->fresh(),
    ]);
}

    public function updatePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'current_password' => 'required|string',
            'password' => 'required|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = Auth::user();

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json(['errors' => ['current_password' => ['Current password is incorrect']]], 422);
        }

        $user->update([
            'password' => Hash::make($request->password)
        ]);

        return response()->json(['message' => 'Password updated successfully']);
    }
}