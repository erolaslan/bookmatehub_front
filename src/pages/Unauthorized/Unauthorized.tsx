// src/pages/Unauthorized/Unauthorized.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Unauthorized.module.css';

const Unauthorized: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Unauthorized Access</h1>
      <p>You don't have permission to view this page.</p>
      <button onClick={() => navigate('/')} className={styles.button}>
        Go to Homepage
      </button>
    </div>
  );
};

export default Unauthorized;
