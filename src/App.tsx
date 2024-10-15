// src/App.tsx
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import './translations/i18n'; // i18n dosyasını burada başlat

function App() {
  return (
    <Router>
      <AuthProvider>
        <CssBaseline />
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
