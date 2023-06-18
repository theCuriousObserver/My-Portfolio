import React from 'react';
import './ContactMe.css';
import linkedinIcon from './linkedin.svg';
import githubIcon from './github.svg';
import tryhackmeIcon from './tryhackme.svg';

const ContactMe = () => {
  return (
    <div className="contact-me" id="contact-me">
      <h1 className="contact-me-heading">Contact Me</h1>
      
      <div className="contact-me-content">
        
        {/* Left Column */}
        <div className="contact-me-left">
          <div className="contact-details">
            <p>Email: pallav.avatarit12@gmail.com</p>
            <p>Phone: +91 7077105233</p>
          </div>
          
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/pallav-avatarit" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/theCuriousObserver" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://tryhackme.com/p/pallav.avatarit" target="_blank" rel="noreferrer">
              <img src={tryhackmeIcon} alt="TryHackMe" />
            </a>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="contact-me-right">
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default ContactMe;
