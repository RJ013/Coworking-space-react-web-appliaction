import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/2_Co_working_space.jpeg';
import image2 from '../assets/4_Reception.jpeg';
import image3 from '../assets/5_Cafeteria.jpeg';
import image4 from '../assets/meeting.png';
import image5 from '../assets/negotiation.png';
import image6 from '../assets/customer-service.png';
import image7 from '../assets/round-table (1).png';
import './css/Infra.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Infra = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <NavBar />
      <div className='amenities'>
        <Carousel data-bs-theme="dark">
          <Carousel.Item className='amenities-image' interval={2000}>
            <img
              className="d-block w-100"
              src={image3}
              alt="Cafeteria"
            />
          </Carousel.Item>
          <Carousel.Item className='amenities-image' interval={2000}>
            <img
              className="d-block w-100"
              src={image2}
              alt="Reception"
            />
          </Carousel.Item>
          <Carousel.Item className='amenities-image' interval={2000}>
            <img
              className="d-block w-100"
              src={image1}
              alt="Co-working space"
            />
          </Carousel.Item>
        </Carousel>

        <div className="infrastructure">
          <h6>WHAT WE OFFER</h6>
          <h1>Our Infrastructure</h1>
         
        </div>

        <div id="cards-container">
  <div className="service">
    <div className="service-icon"><img src={image6} alt="Reception" height="100px" width="100px" /></div>
    <div className="service-title">Reception</div>
    <div className="service-desc">Our modern reception area welcomes you with a professional atmosphere, ensuring a great first impression.</div>
  </div>
  <div className="service">
    <div className="service-icon"><img src={image4} alt="Co-working Space" height="100px" width="100px" /></div>
    <div className="service-title">Co-working Space</div>
    <div className="service-desc">Collaborate and innovate in our flexible co-working spaces, designed for productivity and networking.</div>
  </div>
  <div className="service">
    <div className="service-icon"><img src={image5} alt="Meeting Area" height="100px" width="100px" /></div>
    <div className="service-title">Meeting Area</div>
    <div className="service-desc">Our meeting areas are equipped with state-of-the-art technology to facilitate effective and efficient discussions.</div>
  </div>
  <div className="service">
    <div className="service-icon"><img src={image7} alt="Cafe" height="100px" width="100px" /></div>
    <div className="service-title">Cafe</div>
    <div className="service-desc">Relax and recharge in our stylish cafe, offering a variety of refreshments to keep you energized throughout the day.</div>
  </div>
</div>


        <div className="office-showcase">
          <div className="image-container">
            <img src={images[currentImageIndex]} alt="Office" className="office-image" />
          </div>
          <div className="content">
            <h2 className='amenitiesh2 h2-heading'>We Create Modern & Stylish Offices</h2>
            <p>
              Our spaces are crafted with the needs of dynamic startups in mind, blending cutting-edge technology with sleek, contemporary design. Whether you're brainstorming the next big idea or meeting with potential investors, our offices provide the perfect environment for productivity and creativity. Discover a workspace that not only meets your professional needs but also reflects your commitment to excellence and innovation.
            </p>
            <Link to="/contact">
              <button className="amenities-btn">CONTACT US</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Infra;
