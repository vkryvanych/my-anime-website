import ContactButton from '../../components/Buttons/ContactButton/ContactButton';
import './ContactForm.css';

function ContactForm() {
    return (
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
    );
}

export default ContactForm;