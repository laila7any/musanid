"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';
import { Spinner } from '../../components/ui/spinner';

export default function AdminDashboardPage() {
  const { user, isLoading, token } = useAuth();
  const router = useRouter();

  const [stats, setStats] = useState(null);
  const [recentRequests, setRecentRequests] = useState([]);
  const [departmentStats, setDepartmentStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isLoading && (!user || user.role !== 'admin')) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

useEffect(() => {
  if (user && user.role === 'admin' && token) {
    const fetchAdminData = async () => {
    setLoading(true);
    setError('');
    try {
      // Fetch dashboard stats
      const statsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/stats`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!statsRes.ok) throw new Error('Failed to fetch stats');
      const statsData = await statsRes.json();
      setStats(statsData);

      // Fetch recent requests (using /admin/all-requests?limit=5 maybe)
      const requestsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/all-requests?limit=5`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!requestsRes.ok) throw new Error('Failed to fetch requests');
      const requestsData = await requestsRes.json();
      // Assuming paginated response with data
      setRecentRequests(requestsData.data || requestsData);

      // Fetch department stats (maybe from /departments with request counts)
      const deptRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/departments`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!deptRes.ok) throw new Error('Failed to fetch departments');
      const deptData = await deptRes.json();
      // We'll need to augment with request counts; for now just show names and emails
      setDepartmentStats(deptData.data || deptData);
    } catch (err) {
      console.error('Admin data fetch error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchAdminData();
    }
  }, [user, token]);

  if (isLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!user || user.role !== 'admin') {
    return null; // will redirect
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Admin <span className="text-blue-600">Dashboard</span>
          </h1>
          <p className="text-gray-600 mt-2">Welcome back, {user.firstName}! Here&apos;s an overview of the system.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg border border-red-300">
            {error}
          </div>
        )}

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Requests"
            value={stats?.total_requests || 0}
            icon="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            color="from-[#41654F] to-[#9DCCB0]"  
          />

          <MetricCard
            title="Pending Reviews"
            value={stats?.pending_reviews || 0}
            icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            color="from-[#705444] to-[#F3E3CD]"  
          />

          <MetricCard
            title="Approved Today"
            value={stats?.approved_today || 0}
            icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            color="from-[#9DCCB0] to-[#41654F]"
          />

          <MetricCard
            title="Total Students"
            value={stats?.total_students || 0}
            icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            color="from-[#705444] to-[#F3E3CD]"
          />
        </div>

        {/* Two column layout: Recent Requests & Department Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Requests */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Requests</h2>
                <Link href="/adminboard/requests" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All
                </Link>
              </div>
              {recentRequests.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No recent requests found.</p>
              ) : (
                <div className="space-y-4">
                  {recentRequests.map((req) => (
                    <RequestRow key={req.id} request={req}/>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Department Overview */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Departments</h2>
              {departmentStats.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No departments found.</p>
              ) : (
                <ul className="space-y-4">
                  {departmentStats.slice(0, 5).map((dept) => (
                    <DepartmentItem key={dept.id} department={dept} />
                  ))}
                </ul>
              )}
              <div className="mt-6">
                <Link href="/adminboard/departments" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Manage Departments →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper components
function MetricCard({ title, value, icon, color }) {
  return (
    <div className={`bg-linear-to-br ${color} rounded-xl shadow-lg p-6 text-white`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-blue-100">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RequestRow({ request }) {
  const statusColors = {
    submitted: 'bg-yellow-100 text-yellow-800',
    in_review: 'bg-blue-100 text-blue-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
    completed: 'bg-gray-100 text-gray-800',
    cancelled: 'bg-gray-100 text-gray-800',
  };
  const statusColor = statusColors[request.status] || 'bg-gray-100 text-gray-800';

  console.log('Rendering RequestRow for request:', request.id);
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
          {request.student?.firstName?.[0] || 'S'}
        </div>
        <div>
          <p className="font-medium text-gray-900">{request.title}</p>
          <p className="text-sm text-gray-500">
            {request.student?.firstName} {request.student?.lastName} • {new Date(request.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColor}`}>
          {request.status}
        </span>
        <Link href={`/adminboard/requests/${request.id}`} className="text-blue-600 hover:text-blue-800">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function DepartmentItem({ department }) {
  return (
    <li className="flex items-center justify-between">
      <div>
        <p className="font-medium text-gray-900">{department.name}</p>
        <p className="text-sm text-gray-500">{department.email}</p>
      </div>
      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
        {/* Placeholder for request count */}
        0 pending
      </span>
    </li>
  );
}