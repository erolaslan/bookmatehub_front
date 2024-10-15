// src/pages/NotFound/NotFound.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>404 - Page Not Found</h1>
      <button onClick={() => navigate('/')} className={styles.button}>
        Go to Homepage
      </button>
      <button onClick={() => navigate(-1)} className={styles.button}>
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
