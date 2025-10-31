import { Link } from 'react-router-dom';
import './RegisterButton.css';

function RegisterButton() {
    return (
        <Link to="/auth/register" className="footer-register-button">
            Зареєструватись
        </Link>
    );
}

export default RegisterButton;