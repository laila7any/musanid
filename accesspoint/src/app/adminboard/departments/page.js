"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Spinner } from '../../../components/ui/spinner';

export default function DepartmentsPage() {
  const { user, isLoading, token } = useAuth();
  const router = useRouter();
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingDept, setEditingDept] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    if (!isLoading && (!user || user.role !== 'admin')) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (user && user.role === 'admin' && token) {
      fetchDepartments();
    }
  }, [user, token]);

  const fetchDepartments = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/departments`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to fetch departments');
      const data = await res.json();
      setDepartments(data.data || data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/departments/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Delete failed');
      setDepartments(departments.filter(d => d.id !== id));
      setDeleteConfirm(null);
    } catch (err) {
      alert('Error deleting department');
    }
  };

  const DepartmentSchema = Yup.object().shape({
    name: Yup.string().required('Name required'),
    email: Yup.string().email('Invalid email').required('Email required'),
    phone: Yup.string().nullable(),
  });

  if (isLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Manage <span className="text-blue-600">Departments</span>
          </h1>
          <button
            onClick={() => {
              setEditingDept(null);
              setShowModal(true);
            }}
            className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            + Add Department
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg border border-red-300">
            {error}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {departments.map((dept) => (
                <tr key={dept.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dept.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dept.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dept.phone || '-'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => {
                        setEditingDept(dept);
                        setShowModal(true);
                      }}
                      className="cursor-pointer text-blue-600 hover:text-blue-800 mr-4"
                    >
                      Edit
                    </button>
                    {deleteConfirm === dept.id ? (
                      <>
                        <span className="text-red-600 mr-2">Sure?</span>
                        <button onClick={() => handleDelete(dept.id)} className="cursor-pointer text-green-600 hover:text-green-800 mr-2">Yes</button>
                        <button onClick={() => setDeleteConfirm(null)} className="cursor-pointer text-gray-600 hover:text-gray-800">No</button>
                      </>
                    ) : (
                      <button onClick={() => setDeleteConfirm(dept.id)} className="cursor-pointer text-red-600 hover:text-red-800">
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {departments.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-gray-500">No departments found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {editingDept ? 'Edit Department' : 'Add Department'}
            </h2>
            <Formik
              initialValues={{
                name: editingDept?.name || '',
                email: editingDept?.email || '',
                phone: editingDept?.phone || '',
              }}
              validationSchema={DepartmentSchema}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  const url = editingDept
                    ? `${process.env.NEXT_PUBLIC_API_URL}/departments/${editingDept.id}`
                    : `${process.env.NEXT_PUBLIC_API_URL}/departments`;
                  const method = editingDept ? 'PUT' : 'POST';
                  const res = await fetch(url, {
                    method,
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(values),
                  });
                  if (!res.ok) throw new Error('Operation failed');
                  await fetchDepartments();
                  setShowModal(false);
                } catch (err) {
                  alert('Error saving department');
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <Field name="name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                    <ErrorMessage name="name" component="div" className="text-sm text-red-600 mt-1" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <Field name="email" type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                    <ErrorMessage name="email" component="div" className="text-sm text-red-600 mt-1" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <Field name="phone" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="cursor-pointer px-4 py-2 border rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Saving...' : 'Save'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
}