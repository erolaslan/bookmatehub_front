import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AuthForm from '../../components/AuthForm/AuthForm';
import { Box, Typography, Link } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();
  const { loginWithEmail, loginWithSocial } = useAuth();

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <AuthForm
          type="login"
          onSubmit={(email, password) => loginWithEmail(email, password)}
          onSocialLogin={(provider) => loginWithSocial(provider)}
        />
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Don't have an account?{' '}
          <Link onClick={() => navigate('/signup')} sx={{ cursor: 'pointer' }}>
            Signup
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
