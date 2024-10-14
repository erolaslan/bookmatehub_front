import React, { useState } from 'react';
import { CssBaseline, Typography, Button, Box, Paper, TextField, Divider } from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon, Apple as AppleIcon } from '@mui/icons-material';

function App() {
  const [view, setView] = useState<'welcome' | 'login' | 'signup'>('welcome'); // Ekran kontrolü

  // Kartın içeriğini değiştiren bileşen
  const renderForm = () => (
    <Box component="form" sx={{ mt: 2 }}>
      <TextField 
        label="Email" 
        variant="outlined" 
        margin="normal" 
        fullWidth 
      />
      <TextField 
        label="Password" 
        type="password" 
        variant="outlined" 
        margin="normal" 
        fullWidth 
      />
      <Button 
        variant="contained" 
        color="primary" 
        fullWidth 
        sx={{ mt: 2 }}
      >
        {view === 'login' ? 'Login' : 'Signup'}
      </Button>

      {/* Sosyal medya oturum açma butonları */}
      <Divider sx={{ my: 2 }}>OR</Divider>

      <Button
        variant="outlined"
        color="inherit"
        fullWidth
        startIcon={<GoogleIcon />}
        sx={{ mb: 1 }}
      >
        Continue with Google
      </Button>
      <Button
        variant="outlined"
        color="inherit"
        fullWidth
        startIcon={<FacebookIcon />}
        sx={{ mb: 1 }}
      >
        Continue with Facebook
      </Button>
      <Button
        variant="outlined"
        color="inherit"
        fullWidth
        startIcon={<AppleIcon />}
      >
        Continue with Apple
      </Button>
    </Box>
  );

  // Kartın içeriğini seçime göre değiştirme
  const renderContent = () => {
    if (view === 'welcome') {
      return (
        <>
          <Typography variant="h3" gutterBottom>
            Welcome to BookMateHub!
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ mt: 2 }} 
            onClick={() => setView('login')}
          >
            Login
          </Button>
          <Button 
            variant="outlined" 
            color="secondary" 
            fullWidth 
            sx={{ mt: 2 }} 
            onClick={() => setView('signup')}
          >
            Signup
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Typography variant="h3" gutterBottom>
            {view === 'login' ? 'Login' : 'Signup'}
          </Typography>
          {renderForm()}
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">
              {view === 'login' ? "Don't have an account?" : 'Already have an account?'}
            </Typography>
            <Button
              onClick={() => setView(view === 'login' ? 'signup' : 'login')}
              sx={{ textTransform: 'none', marginTop: 1 }}
            >
              {view === 'login' ? 'Signup' : 'Login'}
            </Button>
          </Box>
        </>
      );
    }
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          overflow: 'hidden',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            width: '90%',
            maxWidth: 400,
            borderRadius: 2,
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          {renderContent()}
        </Paper>
      </Box>
    </>
  );
}

export default App;
