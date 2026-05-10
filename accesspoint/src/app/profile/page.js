"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";import { useDispatch } from 'react-redux';
import { setCredentials } from '../../lib/store'; 

export default function ProfilePage() {
  const { user, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState("");
  const [requests, setRequests] = useState([]);
  const [loadingRequests, setLoadingRequests] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const dispatch = useDispatch();
const token = localStorage.getItem('token'); 

  const getStatusBadge = (status) => {
    const statusConfig = {
      approved: "bg-green-100 text-green-800",
      submitted: "bg-yellow-100 text-yellow-800",
      in_review: "bg-primary-100 text-primary-800",
      rejected: "bg-red-100 text-red-800",
      completed: "bg-gray-100 text-gray-800",
      pending: "bg-yellow-100 text-yellow-800", // for department pivot
      needs_more_info: "bg-orange-100 text-orange-800", // for department pivot
    };
    return statusConfig[status] || "bg-gray-100 text-gray-800";
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  useEffect(() => {
    if (user && user.role === "student") {
      const token = localStorage.getItem("token");
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/requests`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          // If response is paginated, res.data.data contains the array
          setRequests(res.data.data || res.data);
        })
        .catch((err) => {
          console.error("Error fetching requests:", err);
        });
    }
  }, [user]);

  // console.log("requests data:", requests);

  // Validation schema for profile update
  const ProfileSchema = Yup.object().shape({
    firstName: Yup.string().min(2, "Too short").required("Required"),
    lastName: Yup.string().nullable(),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().min(10, "Invalid phone").required("Required"),
    studentId: Yup.string().when("role", {
      is: "student",
      then: (schema) =>
        schema
          .required("Student ID required")
          .matches(/^[A-Za-z0-9]+$/, "Only letters and numbers"),
      otherwise: (schema) => schema.nullable(),
    }),
    disability_info: Yup.string().nullable(),
    telegram_chat_id: Yup.string().nullable(),
  });

  // Password change schema
  const PasswordSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current password required"),
    newPassword: Yup.string()
      .min(8, "At least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Must contain uppercase, lowercase, number",
      )
      .required("New password required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Please confirm password"),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Not logged in
          </h2>
          <Link href="/login" className="text-primary-600 hover:text-primary-800">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-primary-50 via-white to-green-light/65 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            My <span className="text-primary-600">Profile</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your account settings and view your information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-24">
              {/* User Avatar */}
              <div className="bg-linear-to-r from-primary-600 to-green-light p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-3">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl text-white font-bold">
                    {user.firstName?.[0]}
                    {user.lastName?.[0]}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-white">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-primary-100 text-sm capitalize">{user.role}</p>
              </div>

              {/* Navigation Tabs */}
              <div className="p-4">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`cursor-pointer w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${
                    activeTab === "profile"
                      ? "bg-primary-50 text-primary-700 font-medium"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <div className="flex items-center ">
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Profile Information
                  </div>
                </button>

                {user.role === "student" && (
                  <button
                    onClick={() => setActiveTab("requests")}
                    className={`cursor-pointer w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${
                      activeTab === "requests"
                        ? "bg-primary-50 text-primary-700 font-medium"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                      My Requests
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-green-dark">
                    Profile Information
                  </h2>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="cursor-pointer px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
                    >
                      Edit Profile
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsEditing(false)}
                      className="cursor-pointer px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                    >
                      Cancel
                    </button>
                  )}
                </div>

                {updateSuccess && (
                  <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                    {updateSuccess}
                  </div>
                )}

                {isEditing ? (
                  <Formik
                    initialValues={{
                      firstName: user.firstName || "",
                      lastName: user.lastName || "",
                      email: user.email || "",
                      phone: user.phone || "",
                      studentId: user.studentId || "",
                      disability_info: user.disability_info || "",
                       telegram_chat_id: user.telegram_chat_id || '',
                    }}
                    validationSchema={ProfileSchema}
onSubmit={async (values, { setSubmitting, setFieldError }) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/profile`,
      values,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    // Success: update Redux store with fresh user data
    dispatch(setCredentials({
      user: response.data.user,
      token: token
    }));

    setUpdateSuccess('Profile updated successfully!');
    setIsEditing(false);
  } catch (error) {
    console.error('Profile update error:', error);
    if (error.response?.status === 422 && error.response.data.errors) {
      // Set Formik errors from Laravel validation
      Object.keys(error.response.data.errors).forEach(field => {
        setFieldError(field, error.response.data.errors[field][0]);
      });
    } else {
      alert('Failed to update profile. Please try again.');
    }
  } finally {
    setSubmitting(false);
  }
}}
                  >
                    {({ isSubmitting, values }) => (
                      <Form className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              First Name *
                            </label>
                            <Field
                              name="firstName"
                              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                            <ErrorMessage
                              name="firstName"
                              component="div"
                              className="text-sm text-red-600 mt-1"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Last Name
                            </label>
                            <Field
                              name="lastName"
                              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                            <ErrorMessage
                              name="lastName"
                              component="div"
                              className="text-sm text-red-600 mt-1"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email *
                          </label>
                          <Field
                            name="email"
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-sm text-red-600 mt-1"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone *
                          </label>
                          <Field
                            name="phone"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="text-sm text-red-600 mt-1"
                          />
                        </div>

                        {user.role === "student" && (
                          <>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Student ID *
                              </label>
                              <Field
                                name="studentId"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                              />
                              <ErrorMessage
                                name="studentId"
                                component="div"
                                className="text-sm text-red-600 mt-1"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Telegram Chat ID (for notifications)</label>
                              <Field name="telegram_chat_id" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                              <p className="text-xs text-gray-500 mt-1">
                                To get your chat ID, start a conversation with our bot @userinfobot and send <code>/start</code>. Your chat ID will be displayed in the bot&apos;s response. This allows us to send you updates about your accommodation requests directly on Telegram.
                              </p>
                            </div>
                          </>
                          )}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Disability Information
                          </label>
                          <Field
                            as="textarea"
                            name="disability_info"
                            rows={3}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            Optional: Share any information to help us support
                            you better.
                          </p>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="cursor-pointer px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
                        >
                          {isSubmitting ? "Saving..." : "Save Changes"}
                        </button>
                      </Form>
                    )}
                  </Formik>
                ) : (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <InfoItem label="First Name" value={user.firstName} />
                      <InfoItem label="Last Name" value={user.lastName} />
                    </div>
                    <InfoItem label="Email" value={user.email} />
                    <InfoItem label="Phone" value={user.phone} />
                    {user.studentId && (
                      <InfoItem label="Student ID" value={user.studentId} />
                    )}
                    <InfoItem label="Role" value={user.role} capitalize />
                    {user.disability_info && (
                      <InfoItem
                        label="Disability Information"
                        value={user.disability_info}
                        multiline
                      />
                    )}
                    <div className="pt-4 text-sm text-green-light">
                      Member since:{" "}
                      {new Date(
                        user.created_at || Date.now(),
                      ).toLocaleDateString()}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Requests Tab (Student) */}
            {activeTab === "requests" && user.role === "student" && (
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-green-dark mb-6">
                  My Accommodation Requests
                </h2>
                {loadingRequests ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-dark"></div>
                  </div>
                ) : requests.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    No requests found.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {requests.map((req) => (
                      <div
                        key={req.id}
                        className="border rounded-lg overflow-hidden"
                      >
                        {/* Header (clickable) */}
                        <div
                          onClick={() => toggleExpand(req.id)}
                          className="flex items-center justify-between p-4 bg-white hover:bg-gray-50 cursor-pointer"
                        >
                          <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">Date</p>
                              <p className="font-medium">
                                {new Date(req.created_at).toLocaleDateString()}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">
                                Request Type
                              </p>
                              <p className="font-medium">{req.request_type}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">
                                Department(s)
                              </p>
                              <p className="font-medium text-sm">
                                {req.departments
                                  ?.map((d) => d.department?.name)
                                  .join(", ") || "N/A"}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Status</p>
                              <span
                                className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(req.status)}`}
                              >
                                {req.status}
                              </span>
                            </div>
                          </div>
                          <div className="ml-4">
                            <svg
                              className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedId === req.id ? "rotate-180" : ""}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Expanded content */}
                        {expandedId === req.id && (
                          <div className="p-4 border-t bg-gray-50">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-sm font-semibold text-gray-700">
                                  Description
                                </h4>
                                <p className="text-gray-600 mt-1">
                                  {req.description}
                                </p>
                              </div>
                              {req.details && (
                                <div>
                                  <h4 className="text-sm font-semibold text-gray-700">
                                    Additional Details
                                  </h4>
                                  <p className="text-gray-600 mt-1">
                                    {req.details}
                                  </p>
                                </div>
                              )}
                              <div>
                                <h4 className="text-sm font-semibold text-gray-700">
                                  Priority
                                </h4>
                                <p className="text-gray-600 mt-1 capitalize">
                                  {req.priority}
                                </p>
                              </div>
                              {req.needed_by && (
                                <div>
                                  <h4 className="text-sm font-semibold text-gray-700">
                                    Needed By
                                  </h4>
                                  <p className="text-gray-600 mt-1">
                                    {new Date(
                                      req.needed_by,
                                    ).toLocaleDateString()}
                                  </p>
                                </div>
                              )}
                            </div>

                            {/* Department review statuses */}
                            {req.departments && req.departments.length > 0 && (
                              <div className="mt-4">
                                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                  Department Reviews
                                </h4>
                                <div className="space-y-2">
                                  {req.departments.map((rd) => (
                                    <div
                                      key={rd.id}
                                      className="flex items-center justify-between text-sm"
                                    >
                                      <span className="text-gray-600">
                                        {rd.department?.name}
                                      </span>
                                      <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(rd.status)}`}
                                      >
                                        {rd.status}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Comments from departments */}
                            {req.departments?.some((rd) => rd.comments) && (
                              <div className="mt-4">
                                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                  Comments
                                </h4>
                                {req.departments
                                  .filter((rd) => rd.comments)
                                  .map((rd) => (
                                    <div
                                      key={rd.id}
                                      className="text-sm text-gray-600 mb-1"
                                    >
                                      <span className="font-medium">
                                        {rd.department?.name}:
                                      </span>{" "}
                                      {rd.comments}
                                    </div>
                                  ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-6">
                  <Link
                    href="/request"
                    className="hover:text-green-dark text-green-light font-medium"
                  >
                    + Submit New Request
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper components
const InfoItem = ({ label, value, capitalize = false, multiline = false }) => (
  <div>
    <p className="text-sm font-medium text-gray-500">{label}</p>
    {multiline ? (
      <p className="mt-1 text-gray-900 whitespace-pre-wrap">{value}</p>
    ) : (
      <p className={`mt-1 text-gray-900 ${capitalize ? "capitalize" : ""}`}>
        {value || "—"}
      </p>
    )}
  </div>
);
