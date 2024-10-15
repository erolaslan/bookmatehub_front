// src/App.tsx
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <CssBaseline />
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
