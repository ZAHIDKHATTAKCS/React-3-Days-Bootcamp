import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <h1>Contact Us  <span style={{color:'hotpink'}}>Flower Shop</span></h1>
        <p>We'd love to hear from you! Fill out the form below and we'll get in touch as soon as possible.</p>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
