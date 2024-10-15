// src/pages/Dashboard/Dashboard.tsx
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className={styles.container}>
      <h1>Welcome, {user?.email}!</h1>
      <p>Role: {user?.role}</p>
      <button onClick={logout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
