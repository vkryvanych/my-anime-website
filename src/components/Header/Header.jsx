import './Header.css';
import BackButton from '../Buttons/BackButton/BackButton';

function Header({ showBackButton = false }) {
    return (
        <header>
            <div className="container header-content">
                <div className="logo">Anime<span>Rec</span></div>
                {showBackButton && <BackButton />}
            </div>
        </header>
    );
}

export default Header;