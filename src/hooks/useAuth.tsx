// src/hooks/useAuth.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// Kullanıcı arayüzü türü
interface User {
  email: string;
  role: 'admin' | 'reviewer' | 'user'; // Roller tanımlandı
}

// AuthContext için tür tanımı
interface AuthContextType {
  user: User | null;
  login: (email: string, role: 'admin' | 'reviewer' | 'user') => void;
  logout: () => void;
}

// AuthContext oluşturma
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider bileşeni
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Login işlevi
  const login = (email: string, role: 'admin' | 'reviewer' | 'user') => {
    const newUser: User = { email, role };
    setUser(newUser);
    navigate('/dashboard'); // Giriş sonrası yönlendirme
  };

  // Logout işlevi
  const logout = () => {
    setUser(null);
    navigate('/'); // Çıkış sonrası yönlendirme
  };

  // Context değerini hazırlama
  const value: AuthContextType = { user, login, logout };

  // Provider bileşenini döndürme
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// useAuth hook'u
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
