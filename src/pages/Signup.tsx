// src/pages/Signup.tsx
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const Signup = () => {
  const { login } = useAuth(); // Mock olarak login yapalım
  const navigate = useNavigate();

  const handleSignup = (email: string, password: string) => {
    login(email, 'user'); // Mock kayıt sonrası login
    navigate('/dashboard');
  };

  return (
    <AuthForm
      title="Signup"
      buttonText="Signup"
      onSubmit={handleSignup}
    />
  );
};

export default Signup;
