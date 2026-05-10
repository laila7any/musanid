"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../hooks/useAuth';
import Link from 'next/link';

// Define request types (can be moved to shared constants)
const requestTypes = [
  { value: 'exam_time', label: 'Extended Exam Time', icon: '⏱️' },
  { value: 'interpreter', label: 'Sign Language Interpreter', icon: '🤟' },
  { value: 'seating', label: 'Special Seating', icon: '🪑' },
  { value: 'transportation', label: 'Campus Transportation', icon: '🚌' },
  { value: 'guide', label: 'Campus Guide', icon: '🧭' },
  { value: 'books', label: 'Adapted Books/Materials', icon: '📚' },
  { value: 'technology', label: 'Assistive Technology', icon: '💻' },
  { value: 'other', label: 'Other', icon: '📝' },
];

// Priority options
const priorityOptions = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

// Validation schema
const RequestSchema = Yup.object().shape({
  request_type: Yup.string().required('Please select a request type'),
  title: Yup.string()
    .min(5, 'Title must be at least 5 characters')
    .max(100, 'Title must be less than 100 characters')
    .required('Title is required'),
  description: Yup.string()
    .min(20, 'Please provide at least 20 characters')
    .max(1000, 'Description cannot exceed 1000 characters')
    .required('Description is required'),
  details: Yup.string().max(500, 'Details cannot exceed 500 characters'),
  priority: Yup.string().oneOf(['low', 'medium', 'high']).required('Priority is required'),
  needed_by: Yup.date().nullable().min(new Date(), 'Needed by date must be in the future'),
  department_ids: Yup.array()
    .min(1, 'Please select at least one department')
    .required('Department selection is required'),
});

export default function NewRequestPage() {
  const { user, isLoading, token } = useAuth();
  const router = useRouter();
  const [departments, setDepartments] = useState([]);
  const [loadingDepartments, setLoadingDepartments] = useState(true);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Fetch departments on mount
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/departments`);
        if (!res.ok) throw new Error('Failed to fetch departments');
       const data = await res.json();
setDepartments(data.data || data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      } finally {
        setLoadingDepartments(false);
      }
    };
    fetchDepartments();
  }, []);

  console.log("departments", departments)
  // Redirect if not authenticated or not student
  useEffect(() => {
    if (!isLoading && (!user || user.role !== 'student')) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading || loadingDepartments) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Submit Accommodation <span className="text-primary-600">Request</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Please provide details about your accommodation needs. Your request will be automatically routed to the appropriate departments for review.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-primary-200/30 overflow-hidden">
          {/* User Info Bar */}
          <div className=" bg-primary-600 px-6 py-4 text-white">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg font-bold">
                  {user.firstName?.[0]}{user.lastName?.[0]}
                </div>
                <div>
                  <p className="text-sm text-primary-100">Requesting as</p>
                  <p className="font-semibold">{user.firstName} {user.lastName} ({user.studentId || 'Student'})</p>
                </div>
              </div>
              <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                {user.email} • {user.phone}
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-300' 
                  : 'bg-red-100 text-red-800 border border-red-300'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <Formik
              initialValues={{
                request_type: '',
                title: '',
                description: '',
                details: '',
                priority: 'medium',
                needed_by: '',
                department_ids: [],
              }}
              validationSchema={RequestSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setSubmitStatus({ type: '', message: '' });
                try {
                  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/requests`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(values),
                  });

                  const data = await response.json();

                  if (!response.ok) {
                    throw new Error(data.message || 'Submission failed');
                  }

                  setSubmitStatus({
                    type: 'success',
                    message: 'Your request has been submitted successfully! You will receive updates via email.',
                  });
                  resetForm();
                } catch (error) {
                  setSubmitStatus({
                    type: 'error',
                    message: error.message || 'Submission failed. Please try again.',
                  });
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting, values }) => (
                <Form className="space-y-6">
                  {/* Request Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Request Type *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {requestTypes.map((type) => (
                        <label
                          key={type.value}
                          className={`
                            flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all
                            ${values.request_type === type.value 
                              ? 'border-primary-600 bg-primary-50 shadow-md' 
                              : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50/50'
                            }
                          `}
                        >
                          <Field
                            type="radio"
                            name="request_type"
                            value={type.value}
                            className="sr-only"
                          />
                          <span className="text-3xl mb-2">{type.icon}</span>
                          <span className="text-sm font-medium text-center">{type.label}</span>
                        </label>
                      ))}
                    </div>
                    <ErrorMessage name="request_type" component="div" className="mt-2 text-sm text-red-600" />
                  </div>

                  {/* Title */}
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                      Title/Summary *
                    </label>
                    <Field
                      type="text"
                      name="title"
                      id="title"
                      placeholder="e.g., Need extended time for final exams"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    <ErrorMessage name="title" component="div" className="mt-2 text-sm text-red-600" />
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Detailed Description *
                    </label>
                    <Field
                      as="textarea"
                      name="description"
                      id="description"
                      rows={4}
                      placeholder="Please describe your accommodation needs in detail..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    <div className="flex justify-between mt-1">
                      <ErrorMessage name="description" component="div" className="text-sm text-red-600" />
                      <span className="text-xs text-gray-500">{values.description.length}/1000</span>
                    </div>
                  </div>

                  {/* Additional Details (optional) */}
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details (optional)
                    </label>
                    <Field
                      as="textarea"
                      name="details"
                      id="details"
                      rows={3}
                      placeholder="Any other relevant information..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  {/* Priority */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Priority *
                    </label>
                    <div className="flex gap-4">
                      {priorityOptions.map(option => (
                        <label key={option.value} className="flex items-center">
                          <Field
                            type="radio"
                            name="priority"
                            value={option.value}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                          />
                          <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                    <ErrorMessage name="priority" component="div" className="mt-2 text-sm text-red-600" />
                  </div>

                  {/* Needed By Date */}
                  <div>
                    <label htmlFor="needed_by" className="block text-sm font-medium text-gray-700 mb-2">
                      Needed By (optional)
                    </label>
                    <Field
                      type="date"
                      name="needed_by"
                      id="needed_by"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      min={new Date().toISOString().split('T')[0]}
                    />
                    <ErrorMessage name="needed_by" component="div" className="mt-2 text-sm text-red-600" />
                  </div>

                  {/* Departments Selection */}
                  <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Which departments should review this request? *
                  </label>
                  <Field name="department_ids">
                  {({ field, form }) => (
                    <div className="space-y-2">
                      {departments.map(dept => {
                        const checked = field.value.includes(dept.id);
                        return (
                          <label key={dept.id} className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                            <input
                              type="checkbox"
                              name={field.name}
                              value={dept.id}
                              checked={checked}
                              onChange={(e) => {
                                const newValue = e.target.checked
                                  ? [...field.value, dept.id]
                                  : field.value.filter(v => v !== dept.id);
                                form.setFieldValue(field.name, newValue);
                              }}
                              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            />
                            <div className="ml-3">
                              <span className="text-sm font-medium text-gray-700">{dept.name}</span>
                              <p className="text-xs text-gray-500">{dept.email}</p>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  )}
                  </Field>
                  <ErrorMessage name="department_ids" component="div" className="mt-2 text-sm text-red-600" />

                  {/* Debug: show selected IDs */}
                  <div className="mt-2 text-xs text-gray-500">
                    Selected departments: {values.department_ids.join(', ') || 'none'}
                  </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        'Submit Request'
                      )}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            {/* Info note */}
            <div className="mt-6 p-4 bg-primary-50 rounded-lg text-sm text-primary-800">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium">After submission:</p>
                  <p className="mt-1">Your request will be sent to the selected departments for review. You can track its status in your <Link href="/profile" className="font-semibold underline">profile</Link>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}