import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useAuth } from '../../hooks/useAuth';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          BookMateHub
        </Typography>
        <LanguageSelector />
        {user && (
          <Box sx={{ marginLeft: 2 }}>
            <Typography variant="body1" sx={{ marginRight: 1 }}>
              {user.email}
            </Typography>
            <button onClick={logout}>Logout</button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
