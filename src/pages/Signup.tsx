import React from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';

function Signup() {
  return (
    <Paper
      elevation={3}
      sx={{ padding: 4, maxWidth: 400, margin: 'auto', borderRadius: 2, marginTop: 8 }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Signup
      </Typography>
      <TextField label="Email" variant="outlined" margin="normal" fullWidth />
      <TextField label="Password" variant="outlined" type="password" margin="normal" fullWidth />
      <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
        Signup
      </Button>
    </Paper>
  );
}

export default Signup;
