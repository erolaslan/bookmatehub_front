// src/routes/ProtectedRoute.tsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface ProtectedRouteProps {
  role: 'admin' | 'reviewer' | 'user';
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ role, children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Kullanıcı yoksa giriş sayfasına yönlendir
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (user.role !== role) {
    // Yanlış role sahipse yetkisiz sayfasına yönlendir
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
