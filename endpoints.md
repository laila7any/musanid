Public Endpoints (No Authentication Required)
POST /api/auth/register - Register a new user (student)

POST /api/auth/login - Login user

GET /api/departments - List all departments

GET /api/departments/{department} - Get a specific department

Protected Endpoints (Require Authentication)
Auth & Profile
POST /api/auth/logout - Logout user

GET /api/auth/me - Get current user

GET /api/profile - Get user profile

PUT /api/profile - Update user profile

PUT /api/profile/password - Update user password

Requests (for students)
GET /api/requests - List requests (student sees theirs, admin sees all)

POST /api/requests - Create a new request (student)

GET /api/requests/{id} - Get a specific request (student sees own, admin sees any)

GET /api/my-requests - Student's requests (with optional status filter)

PUT /api/my-requests/{request}/cancel - Cancel a request (student, only if in draft/submitted)

PUT /api/my-requests/{request}/withdraw - Withdraw a request (student, only if in review)

Notifications
GET /api/notifications - List user notifications

GET /api/notifications/unread - Get unread notifications count and list

PUT /api/notifications/{notification}/read - Mark a notification as read

PUT /api/notifications/read-all - Mark all notifications as read

Dashboard
GET /api/dashboard/stats - Get dashboard statistics (different for student and admin)

GET /api/dashboard/recent-requests - Get recent requests (5 most recent)

Admin Routes (Require Admin Role)
Admin Dashboard
GET /api/admin/all-requests - Get all requests (admin)

GET /api/admin/department-requests - Get requests by department (admin)

PUT /api/admin/requests/{request}/assign - Assign a request to a department (admin)

PUT /api/admin/requests/{requestDepartment}/review - Review a request (admin)

PUT /api/admin/requests/{request}/status - Update request status (admin)

Admin Management
PUT /api/requests/{id} - Update a request (admin)

DELETE /api/requests/{id} - Delete a request (admin)

POST /api/departments - Create a department (admin)

PUT /api/departments/{department} - Update a department (admin)

DELETE /api/departments/{department} - Delete a department (admin)

GET /api/users - List users (admin)

PUT /api/users/{user}/role - Update user role (admin)

DELETE /api/users/{user} - Delete a user (admin)

GET /api/system/stats - Get system statistics (admin)

GET /api/system/reports - Generate a report (admin)