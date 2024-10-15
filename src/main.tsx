// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './translations/i18n'; // i18n yapılandırmasını başlat
import './styles/Global.css';  // Global CSS dosyası




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
