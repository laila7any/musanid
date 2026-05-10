"use client";
import React from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { useAuth } from '../../hooks/useAuth';

export default function LoginPage() {
  const { login,user, isLoading, error, isAuthenticated } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (isAuthenticated) {
      if (user?.role === 'student'){
        router.push('/');
      }else if(user?.role === 'admin'){
        router.push('/adminboard');
      }
    }
  }, [isAuthenticated, router, user]);

  console.log('LoginPage render: isAuthenticated=', isAuthenticated);
  console.log("role testt",user?.role)


  return (
    <div className="min-h-screen bg-linear-to-br from-green-light/20 via-secondary to-white flex items-center justify-center px-4">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-primary-500/5 -skew-y-6 transform origin-top-right"></div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-primary-500/10 p-8">
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
            <h1 className="text-3xl font-bold text-primary-500 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">
              Sign in to your library account
            </p>
          </div>
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Email is required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Password is required";
              }
              return errors;
            }}
             onSubmit={async (values, { setSubmitting, setFieldError }) => {
              try {
                await login(values.email, values.password);
                // The useAuth hook and useEffect will handle redirect
                console.log('loginData', values);
              } catch (err) {
                // Formik will handle form errors, Redux handles API errors
                console.error('Login error:', err);
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting, touched, errors, submitForm }) => (
              <Form className="space-y-6">
                {/* Email Field */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-primary-500 mb-2"
                  >
                    University Email
                  </label>
                  <div className="relative">
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="student@university.edu"
                      className={`
                        w-full px-4 py-3 pl-11 rounded-lg border 
                        ${touched.email && errors.email 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:border-primary focus:ring-primary'
                        }
                        focus:ring-2 focus:ring-opacity-20 focus:outline-none
                        transition duration-200
                      `}
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="mt-2 text-sm text-red-600"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label 
                      htmlFor="password" 
                      className="block text-sm font-medium text-primary-500 mb-2"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      className={`
                        w-full px-4 py-3 pl-11 pr-11 rounded-lg border 
                        ${touched.password && errors.password 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
                        }
                        focus:ring-2 focus:ring-opacity-20 focus:outline-none
                        transition duration-200
                      `}
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="mt-2 text-sm text-red-600"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition duration-200 transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {(isLoading || isSubmitting) ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Signing in...
                    </span>
                  ) : (
                    "Sign in"
                  )}
                </button>

                {/* Sign Up Link */}
                <div className="text-center pt-4">
                  <p className="text-gray-600">
                    Don&apos;t have an account?{" "}
                    <Link 
                      href="/register" 
                      className="text-primary-500 font-medium hover:text-primary-600 transition duration-150"
                    >
                      Create account
                    </Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}