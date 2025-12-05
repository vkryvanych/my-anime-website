import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import LoginButton from '../Buttons/LoginButton/LoginButton';
import { useUserSession } from '../../hooks/useUserSession';

function LoginForm({ useUserSessionHook = useUserSession }) {
  const { userLogin, authError, authSuccess } = useUserSessionHook();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }

    
    const result = await userLogin(formData);
    console.log('Імітація входу:', formData);

    if (result && result.success) {
      navigate('/'); 
    }
  };

  return (
    <div className="login-form">
      <h2 className="auth-title">Увійти</h2>

      <form onSubmit={handleSubmit} noValidate={false}>
        <div className="input-with-icon">
          <input
            type="email"
            name="email"
            id="login-email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <img src="/user.png" alt="Username" className="input-icon" />
        </div>

        <div className="input-with-icon">
          <input
            type="password"
            name="password"
            id="login-password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <img src="/padlock.png" alt="Password" className="input-icon" />
        </div>

        {authError && <div className="auth-error">{authError}</div>}
        {authSuccess && <div className="auth-success">{authSuccess}</div>}

      
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