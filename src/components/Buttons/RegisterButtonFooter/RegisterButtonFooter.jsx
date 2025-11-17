import { Link } from 'react-router-dom';
import './RegisterButtonFooter.css';

function RegisterButtonFooter() {
    return (
        <Link to="/auth/register" className="footer-register-button">
            Зареєструватись
        </Link>
    );
}

export default RegisterButtonFooter; 