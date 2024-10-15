// src/pages/Signup/Signup.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import { Box, Typography, Link } from '@mui/material';
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';

const Signup: React.FC = () => {
  const navigate = useNavigate();
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
          type="signup"
          onSubmit={(email, password) => console.log(email, password)}
          onSocialLogin={(provider) => console.log(provider)}
        />
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          {t('already_have_account')}{' '}
          <Link onClick={() => navigate('/login')} sx={{ cursor: 'pointer' }}>
            {t('login')}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
