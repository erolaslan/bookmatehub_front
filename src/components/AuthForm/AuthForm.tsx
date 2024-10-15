// src/components/AuthForm/AuthForm.tsx
import React, { useState } from 'react';
import { Box, Button, Divider, Paper, TextField } from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon, Apple as AppleIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface AuthFormProps {
  type: 'login' | 'signup';
  onSubmit: (email: string, password: string) => void;
  onSocialLogin: (provider: 'google' | 'facebook' | 'apple') => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit, onSocialLogin }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(email, password);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 4,
        maxWidth: 400,
        width: '90%',
        borderRadius: 2,
        textAlign: 'center',
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          label={t('email')}
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label={t('password')}
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          {type === 'login' ? t('login') : t('signup')}
        </Button>
        <Divider sx={{ my: 2 }}>{t('OR')}</Divider>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={() => onSocialLogin('google')}
          sx={{ marginBottom: 1 }}
        >
          {t('continue_with_google')}
        </Button>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<FacebookIcon />}
          onClick={() => onSocialLogin('facebook')}
          sx={{ marginBottom: 1 }}
        >
          {t('continue_with_facebook')}
        </Button>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<AppleIcon />}
          onClick={() => onSocialLogin('apple')}
        >
          {t('continue_with_apple')}
        </Button>
      </form>
    </Paper>
  );
};

export default AuthForm;
