// lib/api.js
import axios from 'axios';

// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      // Clear auth data
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
      
      // Redirect to login
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

// Auth API
export const authApi = {
register: async (userData) => {
    try {
      console.log('Register API call with data:', userData);
      
   const response = await api.post('/register', {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phone: userData.phone,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
      role: userData.role || 'student',
      studentId: userData.studentId || null,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

      console.log('Register API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Register API error:', error.response?.data);
      throw error;
    }
  },

  login: async (credentials) => {
    const response = await api.post('/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  logout: async () => {
    const response = await api.post('/logout');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return response.data;
  },

  getCurrentUser: async () => {
    const response = await api.get('/me');
    return response.data;
  },

  updateProfile: async (profileData) => {
    const response = await api.put('/profile', profileData);
    return response.data;
  },
};

export default api;