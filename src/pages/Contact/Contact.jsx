import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ContactText from '../../components/ContactText/ContactText';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <Header showBackButton={true} />
            
            <div className="contact-page">
                <div className="contact-content">
                    <ContactText />
                    <ContactForm />
                </div>
            </div>
            
            <Footer showAuthButtons={false} showContactLink={false} />
        </div>
    );
}

export default Contact;