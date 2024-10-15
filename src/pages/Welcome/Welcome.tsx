// src/pages/Welcome/Welcome.tsx
import React from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';

const Welcome: React.FC = () => {
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
      {/* Dil Seçici Sağ Üstte */}
      <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
        <LanguageSelector />
      </Box>

      <Paper
        elevation={3}
        sx={{
          padding: 4,
          textAlign: 'center',
          width: '90%',
          maxWidth: 400,
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" gutterBottom>
          {t('welcome_message')}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          {t('discover_and_track')}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginBottom: 2 }}
          onClick={() => navigate('/login')}
        >
          {t('login')}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={() => navigate('/signup')}
        >
          {t('signup')}
        </Button>
      </Paper>
    </Box>
  );
};

export default Welcome;
