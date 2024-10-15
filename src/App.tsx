// src/App.tsx
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <Router> {/* Router burada üst seviyede */}
      <AuthProvider>
        <CssBaseline />
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
