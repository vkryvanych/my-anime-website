import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import AuthBackground from '../../components/AuthBackground/AuthBackground';
import './Auth.css';

function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === '/auth/login' || location.pathname === '/auth';
  
  return (
    <div className="auth-container">
      <Header showBackButton={true} />
      
      <div className="auth-page">
        <AuthBackground isLogin={isLogin} />
        
        <div className="auth-form-container">
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
      
      <Footer showAuthButtons={false} showContactLink={true} />
    </div>
  );
}

export default Auth;