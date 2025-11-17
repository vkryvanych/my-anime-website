import { useState } from 'react';
import ContactButton from '../../components/Buttons/ContactButton/ContactButton';
import { useContact } from '../../hooks/useContact';
import './ContactForm.css';

function ContactForm() {
  const { sendMessage, contactError, contactSuccess } = useContact();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    comment: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }

    const result = await sendMessage(formData);

    if (result && result.success) {
      setFormData({
        username: '',
        email: '',
        comment: ''
      });
    }
  };

  return (
    <div className="contact-form-section">
      <div className="contact-form">
        <form onSubmit={handleSubmit} noValidate={false}>
          <div className="form-group">
            <div className="input-with-icon">
              <input 
                type="text" 
                name="username"
                id="contact-username"
                placeholder="Username" 
                value={formData.username}
                onChange={handleChange}
                required
              />
              <img src="/user.png" alt="Username" className="input-icon" />
            </div>
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <input 
                type="email" 
                name="email"
                id="contact-email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
              <img src="/email (1).png" alt="Email" className="input-icon" />
            </div>
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <textarea 
                name="comment"
                id="contact-comment"
                placeholder="Comment" 
                rows="4" 
                value={formData.comment}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          {contactError && <div className="contact-error">{contactError}</div>}
          {contactSuccess && <div className="contact-success">{contactSuccess}</div>}

          <ContactButton />
        </form>
      </div>
    </div>
  );
}

export default ContactForm;