// src/routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Açık Erişimli Sayfalar */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Korumalı Erişim: Kullanıcı Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute role="user">
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Korumalı Erişim: Admin Panel */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <div>Admin Panel</div> {/* Gelecekte admin sayfası buraya gelecek */}
          </ProtectedRoute>
        }
      />

      {/* Korumalı Erişim: Reviewer Sayfası */}
      <Route
        path="/reviewer"
        element={
          <ProtectedRoute role="reviewer">
            <div>Reviewer Panel</div> {/* Denetleyici rolü için sayfa */}
          </ProtectedRoute>
        }
      />

      {/* 404 - Sayfa Bulunamadı */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
