import './Footer.css';
import RegisterButtonFooter from '../../components/Buttons/RegisterButtonFooter/RegisterButtonFooter';
import LoginButtonFooter from '../../components/Buttons/LoginButtonFooter/LoginButtonFooter';
import { Link } from 'react-router-dom';

function Footer({ showAuthButtons = true, showContactLink = true }) {
    return (
        <footer>
            <div className="footerContainer">
                <div className="socialIcons">
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a data-testid = "instagramIcon" href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=4hefydo"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a data-testid = "tiktokIcon" href="https://www.tiktok.com/@lawlietssss?_r=1&_t=ZM-91JUJAxqbrI"><i className="fa-brands fa-tiktok"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                </div>
                
                {showAuthButtons && (
                    <div className="footerLinks">
                        <RegisterButtonFooter />
                        <LoginButtonFooter />
                    </div>
                )}
                
                {showContactLink && (
                    <div className="footer-contact-section">
                        <Link to="/contact" className="footer-contact-link" data-testid="footer-contact-link">
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