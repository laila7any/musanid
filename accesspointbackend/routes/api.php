<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\RequestController;
use App\Http\Controllers\Api\DepartmentController;
use App\Http\Controllers\Api\NotificationController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\ContactController;

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


// Public routes (accessible without authentication)
Route::get('departments', [DepartmentController::class, 'index']);
Route::get('departments/{department}', [DepartmentController::class, 'show']);
Route::post('/contact', [ContactController::class, 'store']);

// Protected routes (require authentication)
Route::middleware('auth:sanctum')->group(function () {
    // Auth routes
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    
    // Profile routes
    Route::prefix('profile')->group(function () {
        Route::get('/', [ProfileController::class, 'show']);
        Route::put('/', [ProfileController::class, 'update']);
        Route::put('/password', [ProfileController::class, 'updatePassword']);
    });

    // Requests routes (for students)
    Route::apiResource('requests', RequestController::class)->except(['update', 'destroy']);
    
    // Student-specific request actions
    Route::prefix('my-requests')->group(function () {
        Route::get('/', [RequestController::class, 'myRequests']);
        Route::put('/{request}/cancel', [RequestController::class, 'cancelRequest']);
        Route::put('/{request}/withdraw', [RequestController::class, 'withdrawRequest']);
    });

    // Notifications routes
    Route::prefix('notifications')->group(function () {
        Route::get('/', [NotificationController::class, 'index']);
        Route::get('/unread', [NotificationController::class, 'unread']);
        Route::put('/{notification}/read', [NotificationController::class, 'markAsRead']);
        Route::put('/read-all', [NotificationController::class, 'markAllAsRead']);
    });

    // Dashboard statistics
    Route::prefix('dashboard')->group(function () {
        Route::get('/stats', [RequestController::class, 'dashboardStats']);
        Route::get('/recent-requests', [RequestController::class, 'recentRequests']);
    });

    // Admin dashboard routes (admin can see all requests)
    Route::prefix('admin')->middleware('admin')->group(function () {
        Route::get('/all-requests', [RequestController::class, 'allRequests']);
        Route::get('/department-requests', [DepartmentController::class, 'departmentRequests']);
        Route::put('/requests/{request}/assign', [DepartmentController::class, 'assignToDepartment'])->withTrashed();
        Route::put('/requests/{requestDepartment}/review', [DepartmentController::class, 'reviewRequest']);
        Route::put('/requests/{request}/status', [DepartmentController::class, 'updateRequestStatusDirect']);
        Route::post('/requests/{request}/send-telegram', [RequestController::class, 'sendTelegramNotification']);
    });
});

// Admin-only routes (require both auth and admin role)
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    // Full CRUD for requests
    Route::apiResource('requests', RequestController::class)->only(['update', 'destroy']);
    
    // Department management
    Route::apiResource('departments', DepartmentController::class)->except(['index', 'show']);
    
    // User management
    Route::prefix('users')->group(function () {
        Route::get('/', [AuthController::class, 'index']);
        Route::put('/{user}/role', [AuthController::class, 'updateRole']);
        Route::put('/{user}/verify', [AuthController::class, 'verifyUser']);
        Route::delete('/{user}', [AuthController::class, 'destroy']);
    });

    // System management
    Route::prefix('system')->group(function () {
        Route::get('/stats', [RequestController::class, 'systemStats']);
        Route::get('/reports', [RequestController::class, 'generateReport']);
    });
});

