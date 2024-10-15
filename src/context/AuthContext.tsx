// src/context/AuthContext.tsx
import { createContext, ReactNode, useContext, useState } from 'react';

interface User {
  email: string;
  role: 'admin' | 'moderator' | 'user';
}

interface AuthContextType {
  user: User | null;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  signupWithEmail: (email: string, password: string) => Promise<void>;
  loginWithSocial: (provider: 'google' | 'facebook' | 'apple') => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const loginWithEmail = async (email: string, password: string) => {
    console.log(`Logging in with email: ${email}`);
    // Backend entegrasyonu burada yapılacak
    setUser({ email, role: 'user' });
  };

  const signupWithEmail = async (email: string, password: string) => {
    console.log(`Signing up with email: ${email}`);
    // Backend entegrasyonu burada yapılacak
    setUser({ email, role: 'user' });
  };

  const loginWithSocial = async (provider: 'google' | 'facebook' | 'apple') => {
    console.log(`Logging in with ${provider}`);
    // Sosyal medya login işlemi burada yapılacak
    setUser({ email: `${provider}@example.com`, role: 'user' });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, loginWithEmail, signupWithEmail, loginWithSocial, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
