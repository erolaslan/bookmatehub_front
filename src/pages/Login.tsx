// src/pages/Login.tsx
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    login(email, 'user'); // Mock login işlemi
    navigate('/dashboard');
  };

  return (
    <AuthForm
      title="Login"
      buttonText="Login"
      onSubmit={handleLogin}
    />
  );
};

export default Login;
