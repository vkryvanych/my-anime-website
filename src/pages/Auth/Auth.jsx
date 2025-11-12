import { useLocation } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import AuthBackground from '../../components/AuthBackground/AuthBackground';
import './Auth.css';

function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === '/auth/login' || location.pathname === '/auth';
  
  return (
    <div className="auth-container">
      <div className="auth-page">
        <AuthBackground isLogin={isLogin} />
        
        <div className="auth-form-container">
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
}

export default Auth;