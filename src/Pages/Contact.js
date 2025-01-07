import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);
    formData.append("access_key", "3347ee3a-ab5e-4bf2-a10a-a00cced9859f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        e.target.reset();
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Error submitting form");
    }
  };

  return (
    <div className="contact">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-container">
        <form onSubmit={onSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Your Name</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Your Email</label>
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="message">Your Message</label>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
          <span className="form-result">{result}</span>
        </form>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: princepatial20@gmail.com</p>
          <p>Phone: +91 8580524080</p>
          <p>Address: Hamirpur, Himachal Pradesh</p>
          <div className="social-links">
            <a href="https://github.com/princepatial" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/princepatial/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://x.com/that_patial?t=wtggDVydurYhr0m2HajiUw" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;