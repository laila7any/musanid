'use client';

import { useSelector, useDispatch } from 'react-redux';
import { login, register, logout, getCurrentUser } from '../../lib/store';

export function useAuth() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return {
    ...auth,
    login: (email, password) => dispatch(login({ email, password })),
    register: (userData) => dispatch(register(userData)),
    logout: () => dispatch(logout()),
    getCurrentUser: () => dispatch(getCurrentUser()),
  };
}

export function useRole(requiredRole) {
  const { user, isAuthenticated, isLoading } = useAuth();
  
  const hasRole = user?.role === requiredRole;
  
  return {
    user,
    isAuthenticated,
    isLoading,
    hasRole,
  };
}