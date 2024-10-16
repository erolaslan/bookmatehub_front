import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from '../pages/Welcome/Welcome';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Dashboard from '../pages/Dashboard/Dashboard';
import NotFound from '../pages/NotFound/NotFound';
import Unauthorized from '../pages/Unauthorized/Unauthorized';
import ProtectedRoute from './ProtectedRoute';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy'; // PrivacyPolicy import edildi

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} /> {/* PrivacyPolicy rotası düzeltildi */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute role="user">
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
