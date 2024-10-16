// src/pages/Login/Login.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AuthForm from '../../components/AuthForm/AuthForm';
import { Box, Typography, Link } from '@mui/material';
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const navigate = useNavigate();
  const { loginWithEmail, loginWithSocial } = useAuth();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        position: 'relative',
      }}
    >
      <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 2 }}>
        <LanguageSelector />
        <Link onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
          {t('back_to_home')}
        </Link>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <AuthForm
          type="login"
          onSubmit={(email, password) => loginWithEmail(email, password)}
          onSocialLogin={(provider) => loginWithSocial(provider)}
        />
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          {t('dont_have_account')}{' '}
          <Link onClick={() => navigate('/signup')} sx={{ cursor: 'pointer' }}>
            {t('signup')}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
