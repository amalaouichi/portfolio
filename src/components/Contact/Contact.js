import React from 'react';
import './Contact.css';
import linkedin from '../../assets/icons/linkedin.png'; 


const Contact = () => {
  return (
    <section id="contact">
      <div id="coln">
        <h2 style={{color:"#006989"}}>Contact</h2>
        <p>Get in touch with me via social media or email.</p>
        <a href="https://www.linkedin.com/in/amal-aouichi-061697209/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="linkedin-icon" />
        </a>
      </div>
      <div id="form-container">
        <form>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-column">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>
            </div>
          </div>
          <button type="submit">Send email</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
