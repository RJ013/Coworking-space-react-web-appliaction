import React from 'react';
import Video from '../assets/welcome-video.mp4';
import Sale from './Sale';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
function Scroll() {
  return (
    <div>
      <NavBar/>
      <div id="page1" className="bg-video-container">
        <video autoPlay loop muted className="bg-vid">
          <source src={Video} type="video/mp4" />
        </video>
        <div className="content">
          <h1>COSPACE SUCCESS</h1>
          <span className="text first-text">
            <h2 className='video-heading'>WELCOME</h2>
          </span>
          <span className="text second-text">
            <h2 className='video-heading'>Book Space for startup!</h2>
            <Link to="/coworking-space" > <button className="join-button">Book Now</button></Link>
          </span>
          <p></p>
        </div>
      </div>
      <div className="ad-container">
        <div className="text-section">
          <div className="text-subsection">
            <h6>Modern Office Space</h6>
            <h1>We are Built for Business — Explore the Space Today!</h1>
            <p>KIF stands at the epicentre of innovation, connecting startups, corporates, academia, investors. Its impact is forging new paths and leaving a bold footprint in what we define as “disruptive innovation”.</p>
            <Link to="/coworking-space" > <button className="join-button">JOIN US NOW</button></Link>
          </div>
        </div>
        <div className="image-section">
         
        </div>
      </div>
      <div className="container-sale">
        <div className="image-container">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Office Setup" />
        </div>
        <div className="content">
          <h2 className='h2-heading'>Everything You Need to Get Started</h2>
          <p>Are you an Aspiring Entrepreneur?
You have come to the right place. We foster intrapreneurship and serve as a gateway for startups with our state-of-the-art initiatives.</p>
          <ul>
            <li></li>
            <li>Reception</li>
            <li>Cubicles</li>
            <li>Co-working Spaces</li>
            <li>Meeting Area</li>
            <li>Fablab</li>
            <li>Cafe</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Scroll;


