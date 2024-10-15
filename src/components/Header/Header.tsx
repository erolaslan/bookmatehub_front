// src/components/Header/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box>BookMateHub</Box>
        <LanguageSelector />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
