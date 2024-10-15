// src/pages/Dashboard.tsx
import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useAuth } from '../hooks/useAuth';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome, {user?.email}!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Role: {user?.role}
      </Typography>
      <Button variant="contained" color="secondary" onClick={logout}>
        Logout
      </Button>
    </Box>
  );
};

export default Dashboard;
