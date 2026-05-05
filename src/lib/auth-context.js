'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('dashboardUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock authentication
    if (email && password.length >= 6) {
      const userData = {
        id: '1',
        email,
        brandName: 'Fit Wellness Inc.',
        name: 'John Doe',
      };
      setUser(userData);
      localStorage.setItem('dashboardUser', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('dashboardUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
