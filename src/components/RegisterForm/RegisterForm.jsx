import RegisterButton from '../../components/Buttons/RegisterButton/RegisterButton';
import { Link } from 'react-router-dom';

function RegisterForm() {
  return (
    <div className="register-form">
      <h2 className="auth-title">Зареєструватися</h2>
      <form>
        <div className="input-with-icon">
          <input type="text" placeholder="Username" />
          <img src="/user.png" alt="Username" className="input-icon" />
        </div>
        <div className="input-with-icon">
          <input type="email" placeholder="Email" />
          <img src="/email (1).png" alt="Email" className="input-icon" />
        </div>
        <div className="input-with-icon">
          <input type="password" placeholder="Password" />
          <img src="/padlock.png" alt="Password" className="input-icon" />
        </div>
        <RegisterButton />
      </form>
      
      <div className="auth-switch">
        <p>Вже маєте акаунт?</p>
        <Link to="/auth/login" className="switch-link">Увійти</Link>
      </div>
    </div>
  );
}

export default RegisterForm;