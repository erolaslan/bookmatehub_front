// src/components/AuthForm.tsx
import React, { FormEvent, useState } from 'react';
import { Paper, TextField, Button, Typography } from '@mui/material';

interface AuthFormProps {
  title: string;
  buttonText: string;
  onSubmit: (email: string, password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ title, buttonText, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 4,
        maxWidth: 400,
        margin: 'auto',
        marginTop: 8,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        {title}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
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
          {buttonText}
        </Button>
      </form>
    </Paper>
  );
};

export default AuthForm;
