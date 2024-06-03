import React from 'react';
import './css/Contact.css';
import NavBar from './NavBar';
import Footer from './Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  return (
    <>
    <NavBar/>
    
    <div className="about-page">
      <div className="header">
        <h1>Contact</h1>
   
      </div>
     




    <div className="contact-container">

<div className="contact-image-section">
   
  </div>
  <div className="contact-text-section">
    <div className="contact-text-subsection">
      <h6>Have Questions? Get in Touch!</h6>
      <br/>
      <h6>We are Built for Business — Explore the Space Today!</h6>
      <p>Cultivating Sustainable Futures, Igniting Innovation - A Catalyst for Entrepreneurial Transformation and Global Well-being. </p>
      <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>KIPM Technical Campus</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>+91-8400534742</p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>kipminnovatorsfoundation@gmail.com</p>
          </div>
        </div>
    </div>
  </div>


 
</div>





    <iframe 
        style={{ width: '100%', height: '400px', border: '0', padding: '0' }} 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.1023216334397!2d83.26767097539009!3d26.7411106767499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399147484fce688b%3A0x81196201753b1789!2sKIPM-College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1716710607641!5m2!1sen!2sin" 
        allowFullScreen 
        loading="lazy"
      ></iframe>


      
      
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
