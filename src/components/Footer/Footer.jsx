import './Footer.css';
import RegisterButton from '../Buttons/RegisterButton/RegisterButton';
import LoginButton from '../Buttons/LoginButton/LoginButton';
import { Link } from 'react-router-dom';

function Footer({ showAuthButtons = true, showContactLink = true }) {
    return (
        <footer>
            <div className="footerContainer">
                <div className="socialIcons">
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-tiktok"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                </div>
                
                {showAuthButtons && (
                    <div className="footerLinks">
                        <RegisterButton />
                        <LoginButton />
                    </div>
                )}
                
                {showContactLink && (
                    <div className="footer-contact-section">
                        <Link to="/contact" className="footer-contact-link">
                            Contact us
                        </Link>
                    </div>
                )}
            </div>

            <div className="footerBottom"> 
                <p>© 2025 Anime Recommendation Engine. Designed by <span className="designer">Victoria Kryvanych</span></p>
            </div>
        </footer>
    );
}

export default Footer;