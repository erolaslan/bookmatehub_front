import React from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';

function Login() {
  return (
    <Paper
      elevation={3}
      sx={{ padding: 4, maxWidth: 400, margin: 'auto', borderRadius: 2, marginTop: 8 }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Login
      </Typography>
      <TextField label="Email" variant="outlined" margin="normal" fullWidth />
      <TextField label="Password" variant="outlined" type="password" margin="normal" fullWidth />
      <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
        Login
      </Button>
    </Paper>
  );
}

export default Login;
