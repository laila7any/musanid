"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../../hooks/useAuth';
import { Spinner } from '../../../../components/ui/spinner';

export default function RequestDetailPage() {
  const { user, isLoading, token } = useAuth();
  const router = useRouter();
  const params = useParams();
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [reviewComment, setReviewComment] = useState('');
  const [reviewStatus, setReviewStatus] = useState('');
  const [selectedDept, setSelectedDept] = useState('');
  const [departments, setDepartments] = useState([]);
  const [assignDept, setAssignDept] = useState('');
const [reviewDept, setReviewDept] = useState('');
const [sendingTelegram, setSendingTelegram] = useState({});

const sendTelegramNotification = async (requestId) => {
  setSendingTelegram(prev => ({ ...prev, [requestId]: true }));
  try {
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/requests/${requestId}/send-telegram`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
    });
    const data = await res.json();
    if (res.ok) {
      alert('Telegram notification sent!');
    } else {
      alert(data.message || 'Failed to send Telegram notification');
    }
  } catch (err) {
    alert('Error sending notification');
  } finally {
    setSendingTelegram(prev => ({ ...prev, [requestId]: false }));
  }
};
// -----------------------------------------------------------------------------------------------

  useEffect(() => {
    if (!isLoading && (!user || user.role !== 'admin')) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (user && user.role === 'admin' && token) {
      fetchRequest();
      fetchAllDepartments();
    }
  }, [user, token, params.id]);

  const fetchRequest = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/requests/${params.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to fetch request');
      const data = await res.json();
      setRequest(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllDepartments = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/departments`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to fetch departments');
      const data = await res.json();
      setDepartments(data.data || data);
    } catch (err) {
      console.error(err);
    }
  };

const handleDepartmentAssignment = async () => {
  if (!assignDept) return;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/requests/${request.id}/assign`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ department_id: assignDept }),
    });
    const data = await res.json();
    if (res.ok) {
      alert('Department assigned successfully');
      fetchRequest();
      setAssignDept('');
    } else {
      alert(data.message || 'Assignment failed');
    }
  } catch (err) {
    alert('Error assigning department');
  }
};

const handleReview = async () => {
  if (!reviewDept || !reviewStatus) return;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/requests/${reviewDept}/review`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ status: reviewStatus, comments: reviewComment }),
    });
    const data = await res.json();
    if (res.ok) {
      alert('Review submitted');
      fetchRequest();
      setReviewDept('');
      setReviewStatus('');
      setReviewComment('');
    } else {
      alert(data.message || 'Review failed');
    }
  } catch (err) {
    alert('Error submitting review');
  }
};

  const getStatusBadge = (status) => {
    const colors = {
      submitted: 'bg-yellow-100 text-yellow-800',
      in_review: 'bg-blue-100 text-blue-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
      completed: 'bg-gray-100 text-gray-800',
      pending: 'bg-yellow-100 text-yellow-800',
      needs_more_info: 'bg-orange-100 text-orange-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  if (isLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!request) return null;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 flex items-center gap-2  justify-between">
          <Link href="/adminboard/requests" className="flex items-center  text-blue-600 hover:text-blue-800">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Requests
          </Link>
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

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{request.title}</h1>
          <p className="text-gray-600 mb-6">Request #{request.id} • {new Date(request.created_at).toLocaleDateString()}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-sm text-gray-500">Student</p>
              <p className="font-medium">{request.student?.firstName} {request.student?.lastName} ({request.student?.studentId})</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Request Type</p>
              <p className="font-medium">{request.request_type}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Priority</p>
              <p className="font-medium capitalize">{request.priority}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Overall Status</p>
              <span className={`px-2 py-1 inline-flex text-xs font-medium rounded-full ${getStatusBadge(request.status)}`}>
                {request.status}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-500">Description</p>
            <p className="mt-1">{request.description}</p>
          </div>

          {request.details && (
            <div className="mb-6">
              <p className="text-sm text-gray-500">Additional Details</p>
              <p className="mt-1">{request.details}</p>
            </div>
          )}

          {request.needed_by && (
            <div className="mb-6">
              <p className="text-sm text-gray-500">Needed By</p>
              <p className="mt-1">{new Date(request.needed_by).toLocaleDateString()}</p>
            </div>
          )}
          {/* telegtam  */}
         <div className="mb-6 flex items-center gap-20">
            <p className="text-sm text-gray-500">Send Telegram Notification</p>
          
<button
  onClick={() => sendTelegramNotification(request.id)}
  disabled={sendingTelegram[request.id]}
  className={`
    group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
    font-medium text-sm transition-all duration-200 ease-out
    ${sendingTelegram[request.id] 
      ? 'bg-gray-400 cursor-not-allowed opacity-70' 
      : 'bg-gradient-to-r from-[#26A5E4] to-[#1C8BC1] hover:from-[#1C8BC1] hover:to-[#1471A0] shadow-md hover:shadow-lg active:scale-95'
    }
    text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
  `}
  title="Send Telegram notification to student"
>
  {sendingTelegram[request.id] ? (
    <>
      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>Sending...</span>
    </>
  ) : (
    <>
      {/* Telegram Icon */}
      <svg className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.665 3.717L2.947 10.765c-1.12.458-1.113 1.074-.205 1.352l4.552 1.42 10.528-6.647c.496-.3.95.148.538.512l-8.53 7.7-.017.017.006.006-.236 4.196c.258 0 .372-.116.516-.256l2.466-2.397 4.817 3.56c.886.525 1.525.257 1.745-.822l3.157-14.843c.323-1.294-.497-1.857-1.346-1.48z" fill="currentColor" />
      </svg>
      <span>Send Telegram</span>
      {/* Optional tailwind tooltip effect on hover */}
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
        Notify student via Telegram
      </span>
    </>
  )}
</button>
</div> 

          {/* Department Reviews */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Department Reviews</h2>
            {request.departments && request.departments.length > 0 ? (
              <div className="space-y-4">
                {request.departments.map((rd) => (
                  <div key={rd.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{rd.department?.name}</p>
                        <p className="text-sm text-gray-500">Assigned: {new Date(rd.created_at).toLocaleDateString()}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(rd.status)}`}>
                        {rd.status}
                      </span>
                    </div>
                    {rd.comments && (
                      <div className="mt-2 text-sm text-gray-600">
                        <span className="font-medium">Comments:</span> {rd.comments}
                      </div>
                    )}
                    {rd.reviewed_by && (
                      <div className="mt-1 text-xs text-gray-400">
                        Reviewed by: {rd.reviewer?.firstName} {rd.reviewer?.lastName} on {new Date(rd.reviewed_at).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No departments assigned yet.</p>
            )}
          </div>

          {/* Admin Actions */}
          <div className="mt-8 border-t pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Admin Actions</h2>

            {/* Review a Department */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">Review a Department</label>
  <div className="space-y-3">
    <select
      value={reviewDept}
      onChange={(e) => setReviewDept(e.target.value)}
      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Select department to review</option>
      {request.departments?.map(rd => (
        <option key={rd.id} value={rd.id}>{rd.department?.name}</option>
      ))}
    </select>
    <select
      value={reviewStatus}
      onChange={(e) => setReviewStatus(e.target.value)}
      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Select status</option>
      <option value="approved">Approved</option>
      <option value="rejected">Rejected</option>
      <option value="needs_more_info">Needs More Info</option>
    </select>
    <textarea
      value={reviewComment}
      onChange={(e) => setReviewComment(e.target.value)}
      placeholder="Comments (optional)"
      rows={3}
      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
    />
    <button
      onClick={handleReview}
      disabled={!reviewDept || !reviewStatus}
      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
    >
      Submit Review
    </button>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}