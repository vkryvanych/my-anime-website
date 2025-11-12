import ContactText from '../../components/ContactText/ContactText';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-page">
                <div className="contact-content">
                    <ContactText />
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;