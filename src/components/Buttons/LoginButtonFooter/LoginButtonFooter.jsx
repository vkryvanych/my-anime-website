import { Link } from 'react-router-dom';
import './LoginButtonFooter.css';

function LoginButtonFooter() {
    return (
        <Link to="/auth/login" className="footer-login-button">
            Увійти
        </Link>
    );
}

export default LoginButtonFooter;