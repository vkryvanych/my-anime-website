import LoginButton from '../../components/Buttons/LoginButton/LoginButton';
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <div className="login-form">
      <h2 className="auth-title">Увійти</h2>
      <form>
        <div className="input-with-icon">
          <input type="text" placeholder="Username" />
          <img src="/public/user.png" alt="Username" className="input-icon" />
        </div>
        <div className="input-with-icon">
          <input type="password" placeholder="Password" />
          <img src="/public/padlock.png" alt="Password" className="input-icon" />
        </div>
        <LoginButton />
      </form>
      
      <div className="auth-switch">
        <p>Не маєте акаунту?</p>
        <Link to="/auth/register" className="switch-link">Зареєструватися</Link>
      </div>
    </div>
  );
}

export default LoginForm;