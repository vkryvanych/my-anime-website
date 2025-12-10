import './ContactText.css';

function ContactText() {
    return (
        <div className="contact-text" data-testid="contact-text-component">
            <h1>Ми тут, щоб допомогти!</h1>
            <p className="contact-description">
                Повідомте нам, як ми можемо найкраще вам допомогти.<br />
                Ми завжди відкриті для вашого зворотного зв'язку.<br />
                Заповніть форму, і наша команда вже працюватиме над вашим запитом.
            </p>
        </div>
    );
}

export default ContactText;