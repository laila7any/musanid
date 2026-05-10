"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import { Spinner } from '../../../components/ui/spinner';

export default function AllRequestsPage() {
  const { user, isLoading, token } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [initialLoad, setInitialLoad] = useState(true);
  const [filters, setFilters] = useState({
    status: searchParams.get('status') || '',
    student_id: '',
  });
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    total: 0,
  });

  useEffect(() => {
    if (!isLoading && (!user || user.role !== 'admin')) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

useEffect(() => {
  if (user && user.role === 'admin' && token) {
    fetchRequests();
  }
}, [user, token, filters.status, filters.student_id]);

  const fetchRequests = async (page = 1) => {
    if (initialLoad) setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.status) params.append('status', filters.status);
      if (filters.student_id) params.append('student_id', filters.student_id);
      params.append('page', page);
      const url = `${process.env.NEXT_PUBLIC_API_URL}/admin/all-requests?${params}`;
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to fetch requests');
      const data = await res.json();
      setRequests(data.data || data);
      setPagination({
        current_page: data.current_page || 1,
        last_page: data.last_page || 1,
        total: data.total || 0,
      });
    } catch (err) {
      setError(err.message);
    } finally {
         setLoading(false);
    setInitialLoad(false);
    }
  };

  const statusColors = {
    submitted: 'bg-yellow-100 text-yellow-800',
    in_review: 'bg-blue-100 text-blue-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
    completed: 'bg-gray-100 text-gray-800',
  };

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
        <div className="mb-8 flex items-center gap-2  justify-between">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            All <span className="text-blue-600">Requests</span>
          </h1>

           <button className=" cursor-pointer px-4 py-2 border rounded-lg bg-blue-500 text-white hover:bg-blue-400">
            <Link href="/adminboard" className=" flex items-center">
            Back
          </Link>
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg border border-red-300">
            {error}
          </div>
        )}

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-4">
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Statuses</option>
            <option value="submitted">Submitted</option>
            <option value="in_review">In Review</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="completed">Completed</option>
          </select>
          <input
            type="text"
            placeholder="Student ID"
            value={filters.student_id}
            onChange={(e) => setFilters({ ...filters, student_id: e.target.value })}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => setFilters({ status: '', student_id: '' })}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Clear
          </button>
        </div>

        {/* Requests Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {requests.map((req) => (
                <tr key={req.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{req.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {req.student?.firstName} {req.student?.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.request_type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(req.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[req.status] || 'bg-gray-100 text-gray-800'}`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <Link href={`/adminboard/requests/${req.id}`} className="text-blue-600 hover:text-blue-800">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
              {requests.length === 0 && (
                <tr>
                  <td colSpan="7" className="px-6 py-4 text-center text-gray-500">No requests found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination.last_page > 1 && (
          <div className="mt-6 flex justify-center space-x-2">
            <button
              onClick={() => fetchRequests(pagination.current_page - 1)}
              disabled={pagination.current_page === 1}
              className="px-4 py-2 border rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">
              Page {pagination.current_page} of {pagination.last_page}
            </span>
            <button
              onClick={() => fetchRequests(pagination.current_page + 1)}
              disabled={pagination.current_page === pagination.last_page}
              className="px-4 py-2 border rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}