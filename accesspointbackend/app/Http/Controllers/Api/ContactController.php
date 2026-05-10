<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'email' => 'required|email',
            'phone' => 'required|string|min:10',
            'studentId' => 'nullable|string|alpha_num',
            'subject' => 'required|string|min:5|max:100',
            'message' => 'required|string|min:20|max:500',
            'department' => 'required|string',
            'contactMethod' => 'required|string|in:email,phone,either',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $contact = ContactMessage::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'student_id' => $request->studentId,
            'subject' => $request->subject,
            'message' => $request->message,
            'department' => $request->department,
            'contact_method' => $request->contactMethod,
        ]);

        // Optionally send email notification
        // Mail::to('admin@university.edu')->send(new ContactFormSubmitted($contact));

        return response()->json([
            'success' => true,
            'message' => 'Thank you for your message! We will get back to you soon.'
        ], 201);
    }
}