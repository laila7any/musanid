"use client";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { useAuth } from "../../hooks/useAuth";

export default function RegisterPage() {
  const { register, isLoading, error, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-light/20 via-secondary to-white flex items-center justify-center px-4 py-6">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-96  bg-primary/5 -skew-y-6 transform origin-top-right"></div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Registration Card */}
       <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-primary/10 p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Link href="/" className="flex items-center gap-x-3" aria-label="Home">
                              <img className="w-20 h-20 rounded-full" src="../images/logo.jpg" alt="logo"/>

              <div className="leading-none">
                <h1 className="text-[#41654F] font-bold text-3xl tracking-[-1px]">MUSANID</h1>
                <p className="text-text-primary-500 text-[10px] tracking-[1px] font-medium -mt-0.5">DISABILITY CARE</p>
              </div>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">
              Create Your Account
            </h1>
            <p className="text-gray-600">
              Join the Accessibility Support System to request academic accommodations
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-red-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-red-700 font-medium">
                  Registration Error
                </span>
              </div>
              {typeof error === "object" ? (
                Object.keys(error).map((field) => (
                  <p key={field} className="text-red-600 text-sm mt-1">
                    {error[field][0]}
                  </p>
                ))
              ) : (
                <p className="text-red-600 text-sm mt-1">{error}</p>
              )}
            </div>
          )}

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              studentId: "",
              role: "student",
              password: "",
              confirmPassword: "",
              phone: "",
              disability_info: "",
              agreeTerms: false,
            }}
            validate={(values) => {
              const errors = {};

              // First Name validation
              if (!values.firstName.trim()) {
                errors.firstName = "First name is required";
              } else if (values.firstName.length < 2) {
                errors.firstName = "First name must be at least 2 characters";
              }

              // Last Name validation (optional in backend, but we keep frontend validation)
              if (values.lastName && values.lastName.length < 2) {
                errors.lastName = "Last name must be at least 2 characters";
              }

              // Phone validation
              if (!values.phone) {
                errors.phone = "Phone number is required";
              } else if (!/^[\d\s\-+()]{10,}$/.test(values.phone)) {
                errors.phone = "Please enter a valid phone number";
              }

              // Email validation
              if (!values.email) {
                errors.email = "Email is required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }

              // Student ID validation (required for students)
              if (values.role === "student" && !values.studentId) {
                errors.studentId = "Student ID is required";
              } else if (
                values.role === "student" &&
                !/^[A-Za-z0-9]+$/.test(values.studentId)
              ) {
                errors.studentId = "Student ID must contain only letters and numbers";
              }

              // Password validation
              if (!values.password) {
                errors.password = "Password is required";
              } else if (values.password.length < 8) {
                errors.password = "Password must be at least 8 characters";
              } else if (
                !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(values.password)
              ) {
                errors.password =
                  "Password must contain at least one uppercase, one lowercase, and one number";
              }

              // Confirm Password validation
              if (!values.confirmPassword) {
                errors.confirmPassword = "Please confirm your password";
              } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Passwords do not match";
              }

              // Terms agreement
              if (!values.agreeTerms) {
                errors.agreeTerms = "You must agree to the terms";
              }

              return errors;
            }}
            onSubmit={async (values, { setSubmitting, setFieldError }) => {
              try {
                const registerData = {
                  firstName: values.firstName,
                  lastName: values.lastName || null,
                  email: values.email,
                  phone: values.phone,
                  studentId: values.role === "student" ? values.studentId : null,
                  role: values.role,
                  password: values.password,
                  confirmPassword: values.confirmPassword,
                  disability_info: values.disability_info || null,
                };
                await register(registerData);
              } catch (err) {
                console.error("Register error:", err);
                if (err.message && typeof err.message === "object") {
                  Object.keys(err.message).forEach((field) => {
                    setFieldError(field, err.message[field][0]);
                  });
                }
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({
              isSubmitting,
              touched,
              errors,
              values,
              setFieldValue,
            }) => (
              <Form className="space-y-6" suppressHydrationWarning>
                {/* Two Column Layout for Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name *
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="John"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        touched.firstName && errors.firstName
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      } focus:ring-2 focus:ring-opacity-20 focus:outline-none transition duration-200`}
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="mt-2 text-sm text-red-600"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Doe"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        touched.lastName && errors.lastName
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      } focus:ring-2 focus:ring-opacity-20 focus:outline-none transition duration-200`}
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="mt-2 text-sm text-red-600"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@university.edu"
                      className={`w-full px-4 py-3 pl-11 rounded-lg border ${
                        touched.email && errors.email
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      } focus:ring-2 focus:ring-opacity-20 focus:outline-none transition duration-200`}
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="mt-2 text-sm text-red-600"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Field
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="(123) 456-7890"
                      className={`w-full px-4 py-3 pl-11 rounded-lg border ${
                        touched.phone && errors.phone
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                      } focus:ring-2 focus:ring-opacity-20 focus:outline-none transition duration-200`}
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="mt-2 text-sm text-red-600"
                  />
                </div>

                {/* Role Dropdown */}
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Account Type *
                  </label>
                  <div className="relative">
                    <Field
                      as="select"
                      name="role"
                      id="role"
                      className={`w-full px-4 py-3 rounded-lg border appearance-none ${
                        touched.role && errors.role
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                      } focus:ring-2 focus:ring-opacity-20 focus:outline-none transition duration-200 bg-white`}
                      onChange={(e) => {
                        setFieldValue("role", e.target.value);
                        if (e.target.value === "admin") {
                          setFieldValue("studentId", "");
                        }
                      }}
                    >
                      <option value="student">Student</option>
                      <option value="admin">Administrator</option>
                    </Field>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-green-light rounded-lg">
                    <p className="text-sm text-white">
                      {values.role === "student"
                        ? "Students can submit accommodation requests and track their status."
                        : "Administrators review requests, manage users, and configure system settings."}
                    </p>
                  </div>
                </div>

                {/* Student ID (Conditional) */}
                {values.role === "student" && (
                  <div className="animate-fade-in">
                    <label
                      htmlFor="studentId"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Student ID *
                    </label>
                    <div className="relative">
                      <Field
                        type="text"
                        name="studentId"
                        id="studentId"
                        placeholder="e.g., S12345678"
                        className={`w-full px-4 py-3 pl-11 rounded-lg border ${
                          touched.studentId && errors.studentId
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                        } focus:ring-2 focus:ring-opacity-20 focus:outline-none transition duration-200`}
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                          />
                        </svg>
                      </div>
                    </div>
                    <ErrorMessage
                      name="studentId"
                      component="div"
                      className="mt-2 text-sm text-red-600"
                    />
                  </div>
                )}

                {/* Disability Information (Optional) */}
                <div>
                  <label
                    htmlFor="disability_info"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Disability Information <span className="text-gray-400">(Optional)</span>
                  </label>
                  <Field
                    as="textarea"
                    name="disability_info"
                    id="disability_info"
                    rows={3}
                    placeholder="Please share any information that will help us better support you (e.g., type of accommodation you may need)"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 focus:outline-none transition duration-200"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    This information helps us personalize your accommodation experience.
                  </p>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password *
                  </label>
                  <div className="relative">
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Create a strong password"
                      className={`w-full px-4 py-3 pl-11 rounded-lg border ${
                        touched.password && errors.password
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                      } focus:ring-2 focus:ring-opacity-20 focus:outline-none transition duration-200`}
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-600 space-y-1">
                    <p className="font-medium">Password must contain:</p>
                    <ul className="list-disc list-inside ml-2">
                      <li className={values.password.length >= 8 ? "text-green-600" : ""}>
                        At least 8 characters
                      </li>
                      <li className={/[a-z]/.test(values.password) ? "text-green-600" : ""}>
                        One lowercase letter
                      </li>
                      <li className={/[A-Z]/.test(values.password) ? "text-green-600" : ""}>
                        One uppercase letter
                      </li>
                      <li className={/\d/.test(values.password) ? "text-green-600" : ""}>
                        One number
                      </li>
                    </ul>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="mt-2 text-sm text-red-600"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <Field
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Re-enter your password"
                      className={`w-full px-4 py-3 pl-11 rounded-lg border ${
                        touched.confirmPassword && errors.confirmPassword
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                      } focus:ring-2 focus:ring-opacity-20 focus:outline-none transition duration-200`}
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                  </div>
                  {values.confirmPassword && values.password === values.confirmPassword && (
                    <div className="mt-2 text-sm text-green-600 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Passwords match
                    </div>
                  )}
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="mt-2 text-sm text-red-600"
                  />
                </div>

                {/* Terms Agreement */}
                <div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Field
                        type="checkbox"
                        name="agreeTerms"
                        id="agreeTerms"
                        className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3">
                      <label
                        htmlFor="agreeTerms"
                        className="text-sm text-gray-600"
                      >
                        I agree to the{" "}
                        <Link
                          href="/terms"
                          className="text-primary-500 hover:text-primary-600 font-medium"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          className="text-primary-500 hover:text-primary-600 font-medium"
                        >
                          Privacy Policy
                        </Link>
                        *
                      </label>
                    </div>
                  </div>
                  <ErrorMessage
                    name="agreeTerms"
                    component="div"
                    className="mt-2 text-sm text-red-600"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  suppressHydrationWarning
                  className="w-full py-3 px-4 bg-primary hover:bg-primary-600 text-white font-medium rounded-lg transition duration-200 transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading || isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Creating Account...
                    </span>
                  ) : (
                    `Create ${values.role === "admin" ? "Administrator" : "Student"} Account`
                  )}
                </button>

                {/* Already have account */}
                <div className="text-center pt-4">
                  <p className="text-gray-600">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="text-primary-500 font-medium hover:text-primary-600 transition duration-150"
                    >
                      Sign in here
                    </Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* Benefits Section */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-primary-500 mb-4">
            Why Register?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3 bg-white/50 backdrop-blur-sm rounded-lg">
              <div className="text-primary-500 font-bold">24/7 Access</div>
              <div className="text-xs text-gray-600">Submit requests anytime</div>
            </div>
            <div className="p-3 bg-white/50 backdrop-blur-sm rounded-lg">
              <div className="text-primary-500 font-bold">Track Status</div>
              <div className="text-xs text-gray-600">Real-time updates</div>
            </div>
            <div className="p-3 bg-white/50 backdrop-blur-sm rounded-lg">
              <div className="text-primary-500 font-bold">Personalized</div>
              <div className="text-xs text-gray-600">Tailored accommodations</div>
            </div>
            <div className="p-3 bg-white/50 backdrop-blur-sm rounded-lg">
              <div className="text-primary-500 font-bold">Secure</div>
              <div className="text-xs text-gray-600">Data protected</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}