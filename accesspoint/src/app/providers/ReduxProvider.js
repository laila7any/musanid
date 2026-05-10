'use client';

import { store } from '../../lib/store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser, setCredentials } from '../../lib/store';

export default function ReduxProvider({ children }) {
  // Initialize auth state on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    if (token && user) {
      store.dispatch(setCredentials({
        user: JSON.parse(user),
        token: token
      }));
      
      // Verify token with backend
      store.dispatch(getCurrentUser());
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}