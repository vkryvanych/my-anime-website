import { useState } from 'react';
import RegisterButton from "../Buttons/RegisterButton/RegisterButton";
import { Link } from 'react-router-dom';
import { useUserSession } from '../../hooks/useUserSession';

function RegisterForm({ useUserSessionHook = useUserSession }) {
  const { userRegister, authError, authSuccess } = useUserSessionHook();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!e.target.checkValidity()) {
      e.target.reportValidity(); 
      return;
    }
 
    await userRegister(formData);
    console.log('Імітація реєстрації:', formData);
  };

  return (
    <div className="register-form" data-testid="register-form"> 
      <h2 className="auth-title">Зареєструватися</h2>

      <form onSubmit={handleSubmit} noValidate={false}>
        <div className="input-with-icon">
          <input
            type="text"
            name="name"
            id="register-username"
            placeholder="Username"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <img src="/user.png" alt="Username" className="input-icon" />
        </div>

        <div className="input-with-icon">
          <input
            type="email"
            name="email"
            id="register-email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <img src="/email (1).png" alt="Email" className="input-icon" />
        </div>

        <div className="input-with-icon">
          <input
            type="password"
            name="password"
            id="register-password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <img src="/padlock.png" alt="Password" className="input-icon" />
        </div>

        {authError && <div className="auth-error">{authError}</div>}
        {authSuccess && <div className="auth-success">{authSuccess}</div>}

        
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