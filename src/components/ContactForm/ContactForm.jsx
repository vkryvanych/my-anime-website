import { useState } from 'react';
import ContactButton from '../../components/Buttons/ContactButton/ContactButton';
import { useContact } from '../../hooks/useContact';
import './ContactForm.css';

function ContactForm({ useContactHook = useContact }) {
  const { sendMessage, contactError, contactSuccess } = useContactHook();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
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
        message: ''
      });
    }
  };

  return (
    <div className="contact-form-section">
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-with-icon">
              <input 
                type="text" 
                name="username"
                placeholder="Username" 
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <textarea 
                name="message"
                placeholder="Comment" 
                rows="4" 
                value={formData.message}
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