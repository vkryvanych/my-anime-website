import { Link } from 'react-router-dom';
import './BackButton.css';

function BackButton() {
    return (
        <Link to="/home" className="back-button">
            ← Назад
        </Link>
    );
}

export default BackButton;