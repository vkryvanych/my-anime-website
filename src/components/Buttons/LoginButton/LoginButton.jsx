import { Link } from 'react-router-dom';
import './LoginButton.css';

function LoginButton() {
    return (
        <Link to="/auth/login" className="footer-login-button">
            Увійти
        </Link>
    );
}

export default LoginButton;