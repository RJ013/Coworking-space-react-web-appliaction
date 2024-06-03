import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './css/Fablabs.css'
const Fablabs = () => {
  return (
    <div>
      <NavBar/>
   
    <div className="Fablab-page">
      <div className="header">
        <h1>Fablabs</h1>
      </div>
      <div className="Fab-container">
      <div className="Fab-text-section">
        <div className="Fab-text-subsection">
          <h6>Our Lab</h6>
          <h1>We are Built for Business — Explore the Space Today!</h1>
          <p>Introducing our advanced Fab Lab, a vibrant workshop equipped with top-notch digital fabrication tools like 3D printers and CNC machines.
             Additionally, we offer facilities for PCB designing, IoT, drones, and GPU servers.
              This comprehensive suite empowers entrepreneurs and innovators to rapidly prototype and refine their ideas, 
            fostering collaboration and driving technological progress for a promising future.</p>
            <Link to="/coworking-space" > <button className="Fab-join-button">JOIN US NOW</button></Link>
         
        </div>
      </div>
    
      <div className="Fab-image-section">
        
      </div>
    </div>




   



    
    
     
  

   



      
      
    </div>
    <Footer/>
    </div>
  );
};

export default Fablabs;