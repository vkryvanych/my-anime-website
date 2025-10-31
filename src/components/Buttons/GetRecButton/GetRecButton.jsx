import { Link } from 'react-router-dom';
import './GetRecButton.css';

function GetRecButton() {
    return (
        <Link to="/test" className="get-rec-button">
            Отримати рекомендацію
        </Link>
    );
}

export default GetRecButton;