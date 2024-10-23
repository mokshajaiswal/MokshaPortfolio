// src/pages/Contact.tsx
import React, { useRef, useEffect, useState } from 'react';
import './Contact.css';
import flower3 from '../assets/about/flower3.png'; // Replace with your flower icon path
import dribbble from '../assets/contact/dribbble-c.png'
import linkedin from '../assets/contact/linkedin-c.png'
import gmail from '../assets/contact/email-c.png'


const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }); 

  return (
    <div className="contact-container-main">
      {/* Flexbox for heading and headline */}
      <div className="heading-headline-c d-flex">
        {/* Section heading on the left */}
        <div className="heading-c d-flex ">
          <img src={flower3} alt="flower" className="heading-icon-c" />
          <h2 className="heading-text-c">Get in touch</h2>
          <img src={flower3} alt="flower" className="heading-icon-c" />
        </div>

        {/* Headline on the right */}
        <h1 className="headline-contact">Let’s connect and create something extraordinary together!</h1>
      </div>
    

    {/* Second Section */}
    <div className='contact-second-section'>
    <div className="contact-cards-container">

       <a href="mailto:mokshajaiswal99@gmail.com" className="contact-card" style={{borderColor: '#ffc5a6'}}>
        <img src={gmail} alt="Email" className="contact-icon" style={{backgroundColor: '#f39b6c'}}/>
        <h3>Email</h3>
        <p>Have any questions or want to collaborate? Drop me a message.</p>
      </a>
      <a href="https://www.linkedin.com/in/mokshajaiswal/" target="_blank" rel="noopener noreferrer" className="contact-card" style={{borderColor: '#dfd2f6'}}>
        <img src={linkedin} alt="LinkedIn" className="contact-icon" style={{backgroundColor: '#b6a2d9'}} />
        <h3>LinkedIn</h3>
        <p>Let’s expand our professional network and explore opportunities.</p>
      </a>
      <a href="https://dribbble.com/mokshajaiswal" target="_blank" rel="noopener noreferrer" className="contact-card" style={{borderColor: '#c8d8ad'}}>
        <img src={dribbble} alt="Dribbble" className="contact-icon" style={{backgroundColor: '#99ad6d'}} />
        <h3>Dribbble</h3>
        <p>View my design portfolio and projects.</p>
      </a>
    </div>
    </div>

</div>
  );
};

export default Contact;
