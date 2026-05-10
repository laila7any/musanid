"use client";
import React,  {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]*$/, 'Invalid phone number')
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone number is required'),
  studentId: Yup.string()
    .matches(/^[A-Za-z0-9]*$/, 'Student ID can only contain letters and numbers'),
  subject: Yup.string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must be less than 100 characters')
    .required('Subject is required'),
  message: Yup.string()
    .min(20, 'Message must be at least 20 characters')
    .max(500, 'Message must be less than 500 characters')
    .required('Message is required'),
  department: Yup.string()
    .required('Please select a department'),
  contactMethod: Yup.string()
    .required('Please select preferred contact method'),
});

export default function ContactPage() {
    const [serverError, setServerError] = useState('');
  const [serverSuccess, setServerSuccess] = useState('');
  // Formik hook
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      studentId: '',
      subject: '',
      message: '',
      department: '',
      contactMethod: '',
    },
validationSchema: ContactSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setServerError('');
      setServerSuccess('');
      
      try {
        const response = await fetch('http://localhost:8000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (!response.ok) {
          // If validation errors from Laravel
          if (data.errors) {
            // Set Formik errors
            const formikErrors = {};
            Object.keys(data.errors).forEach(field => {
              formikErrors[field] = data.errors[field][0];
            });
            formik.setErrors(formikErrors);
          }
          throw new Error(data.message || 'Something went wrong');
        }

        // Success
        setServerSuccess(data.message);
        resetForm();
      } catch (error) {
        console.error('Submission error:', error);
        setServerError(error.message || 'Failed to send message. Please try again.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Departments data
  const departments = [
    { value: '', label: 'Select Department' },
    { value: 'admissions', label: 'Admissions Office' },
    { value: 'registrar', label: 'Registrar\'s Office' },
    { value: 'financial-aid', label: 'Financial Aid' },
    { value: 'academic-advising', label: 'Academic Advising' },
    { value: 'student-services', label: 'Student Services' },
    { value: 'faculty-affairs', label: 'Faculty Affairs' },
    { value: 'research', label: 'Research Department' },
    { value: 'international', label: 'International Office' },
    { value: 'alumni', label: 'Alumni Relations' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div suppressHydrationWarning className="min-h-screen bg-[#f3e3cd36] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-primary-500 sm:text-5xl">
            Contact <span className="text-green-dark">University</span>
          </h1>
          <p className="mt-4 text-xl text-green-dark max-w-3xl mx-auto">
            We&apos;re here to help! Reach out to our dedicated teams for assistance with admissions, 
            academic programs, student services, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 bg-white rounded-2xl shadow-xl p-8 h-fit">
            <h2 className="text-2xl font-bold text-green-dark mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-light/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-green-dark">Main Campus Address</h3>
                  <p className="text-gray-600 mt-1">
                    123 University Avenue<br />
                    Academic City, AC 12345<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-light/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-green-dark">Phone Numbers</h3>
                  <p className="text-gray-600 mt-1">
                    General Inquiries: (123) 456-7890<br />
                    Admissions: (123) 456-7891<br />
                    Emergency: (123) 456-7899
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-light/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-green-dark">Email Addresses</h3>
                  <p className="text-gray-600 mt-1">
                    General: Email Us: info@musanid.com<br />
                    Admissions: admissions@university.edu<br />
                    Support: support@university.edu
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-green-dark mb-4">Office Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Thursday:</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday:</span>
                    <span className="font-medium">8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-green-dark mb-6">Send us a Message</h2>

            {/* ------------------------------------------*/}
                  {serverSuccess && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          {serverSuccess}
        </div>
      )}
      {serverError && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {serverError}
        </div>
      )}
            {/* ------------------------------------------*/}
            
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-dark focus:border-green-dark transition-colors ${
                      formik.touched.name && formik.errors.name 
                        ? 'border-red-500' 
                        : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="mt-2 text-sm text-red-600">{formik.errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-dark focus:border-green-dark transition-colors ${
                      formik.touched.email && formik.errors.email 
                        ? 'border-red-500' 
                        : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="mt-2 text-sm text-red-600">{formik.errors.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-dark focus:border-green-dark transition-colors ${
                      formik.touched.phone && formik.errors.phone 
                        ? 'border-red-500' 
                        : 'border-gray-300'
                    }`}
                    placeholder="(123) 456-7890"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="mt-2 text-sm text-red-600">{formik.errors.phone}</p>
                  )}
                </div>

                {/* Student ID Field */}
                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-2">
                    Student ID (Optional)
                  </label>
                  <input
                    id="studentId"
                    name="studentId"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.studentId}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-dark focus:border-green-dark transition-colors"
                    placeholder="STU123456"
                  />
                </div>
              </div>

              {/* Department Selection */}
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Department *
                </label>
                <select
                  id="department"
                  name="department"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.department}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-dark focus:border-green-dark transition-colors ${
                    formik.touched.department && formik.errors.department 
                      ? 'border-red-500' 
                      : 'border-gray-300'
                  }`}
                >
                  {departments.map((dept) => (
                    <option key={dept.value} value={dept.value}>
                      {dept.label}
                    </option>
                  ))}
                </select>
                {formik.touched.department && formik.errors.department && (
                  <p className="mt-2 text-sm text-red-600">{formik.errors.department}</p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-dark focus:border-green-dark transition-colors ${
                    formik.touched.subject && formik.errors.subject 
                      ? 'border-red-500' 
                      : 'border-gray-300'
                  }`}
                  placeholder="Brief description of your inquiry"
                />
                {formik.touched.subject && formik.errors.subject && (
                  <p className="mt-2 text-sm text-red-600">{formik.errors.subject}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-dark focus:border-green-dark transition-colors ${
                    formik.touched.message && formik.errors.message 
                      ? 'border-red-500' 
                      : 'border-gray-300'
                  }`}
                  placeholder="Please provide details about your inquiry..."
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="mt-2 text-sm text-red-600">{formik.errors.message}</p>
                )}
                <div className="mt-2 text-sm text-gray-500 text-right">
                  {formik.values.message.length}/500 characters
                </div>
              </div>

              {/* Contact Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Preferred Contact Method *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {['Email', 'Phone', 'Either'].map((method) => (
                    <label
                      key={method}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                        formik.values.contactMethod === method.toLowerCase()
                          ? 'border-green-dark bg-green-50'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method.toLowerCase()}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.contactMethod === method.toLowerCase()}
                        className="h-4 w-4 text-green-dark focus:ring-green-dark"
                      />
                      <span className="ml-3 text-sm font-medium text-gray-700">{method}</span>
                    </label>
                  ))}
                </div>
                {formik.touched.contactMethod && formik.errors.contactMethod && (
                  <p className="mt-2 text-sm text-red-600">{formik.errors.contactMethod}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={formik.isSubmitting || !formik.isValid}
                  className={`w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${
                    formik.isSubmitting || !formik.isValid
                      ? 'bg-green-light cursor-not-allowed'
                      : 'bg-green-dark/95 hover:bg-green-dark'
                  }`}
                >
                  {formik.isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
                <p className="mt-3 text-sm text-gray-500 text-center">
                  * Required fields. We aim to respond within 24-48 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}