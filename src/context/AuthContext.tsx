// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  role: 'admin' | 'moderator' | 'user';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, role: 'admin' | 'moderator' | 'user') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, role: 'admin' | 'moderator' | 'user') => {
    setUser({ email, role });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
