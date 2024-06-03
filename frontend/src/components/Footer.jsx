
import './css/Footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget company_widget wow fadeInLeft"
                data-wow-delay="0.2s"
                style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}
              >
                <h3 className="f-title f_600 t_color f_size_18">About KIF</h3>
                <p>Empowering dreamers, creators, and disruptors—KIF is the launchpad for tomorrow's global leaders.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.4s"
                style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}
              >
                <h3 className="f-title f_600 t_color f_size_18">Quick Links</h3>
                <ul className="list-unstyled f_list">
                  <li>
                  <Link to="/about" >About</Link>
                  </li>
                  <li>
                  <Link to="/startups" >Startups</Link>
                  </li>
                  <li>
                  <Link to="/fablabs" >Fablabs</Link>
                  </li>
                  <li>
                  <Link to="/coworking-space" >Coworking Space</Link>
                  </li>
                  <li>
                  <Link to="/amenities" >Amenities</Link>
                  </li>
                  <li>
                  <Link to="/blog" >Blogs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.6s"
                style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}
              >
                
                <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                <ul className="list-unstyled f_list">
                 
                  <li>
                  
                    <a href="#">+91-8400534742</a>
                  </li>
                  <li>
                    <a href="#">kipminnovatorsfoundation@gmail.com</a>
                  </li>
                  <li>
                    <a href="#">KIPM Technical Campus</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget social-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.8s"
                style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}
              >
                <h3 className="f-title f_600 t_color f_size_18">Socials</h3>
                <div className="f_social_icon">
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.instagram.com/kipm_innovators_foundation"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">© RHV.. 2024 All rights reserved.</p>
            </div>
            <div className="col-lg-6 col-sm-5 text-right">
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;