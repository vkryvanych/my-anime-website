import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ContactButton from '../../components/Buttons/ContactButton/ContactButton';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <Header showBackButton={true} />
            
            <div className="contact-page">
                <div className="contact-content">
                    <div className="contact-text">
                        <h1>Ми тут, щоб допомогти!</h1>
                        <p className="contact-description">
                            Повідомте нам, як ми можемо найкраще вам допомогти.<br />
                            Ми завжди відкриті для вашого зворотного зв'язку.<br />
                            Заповніть форму, і наша команда вже працюватиме над вашим запитом.
                        </p>
                    </div>

                    <div className="contact-form-section">
                        <div className="contact-form">
                            <div className="form-group">
                                <div className="input-with-icon">
                                    <input type="text" placeholder="Username" />
                                    <img src="/public/user.png" alt="Username" className="input-icon" />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-with-icon">
                                    <input type="email" placeholder="Email" />
                                    <img src="/public/email (1).png" alt="Email" className="input-icon" />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-with-icon">
                                    <textarea placeholder="Comment" rows="4"></textarea>
                                </div>
                            </div>

                            <ContactButton />
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer showAuthButtons={false} showContactLink={false} />
        </div>
    );
}

export default Contact;