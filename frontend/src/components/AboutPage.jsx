import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './css/Aboutpage.css';
import { Link } from 'react-router-dom';

const directors = [
  {
    id: 1,
    name: 'Er. R. D. Singh',
    image: '/images/Director1(1)(1).png', // Path to director's image
    description: `He is a forward-thinking leader deeply committed to nurturing innovation and entrepreneurship through the KIPM Innovators Foundation - An incubation center at KIPM Technical Campus.

    With a profound understanding of the transformative power of incubation centers, he has spearheaded initiatives to create a dynamic ecosystem where aspiring entrepreneurs and established companies can thrive.

    Under his guidance, the KIPM Innovators Foundation has emerged as a beacon of innovation, providing aspiring entrepreneurs with the resources, mentorship, and networking opportunities they need to bring their ideas to life.

    His dedication to creativity and collaboration has positioned the incubation center as a premier destination for those looking to turn their entrepreneurial dreams into reality.

    With a focus on fostering a culture of innovation and excellence, he continues to inspire students, entrepreneurs, and companies alike to push the boundaries of what's possible. His leadership has transformed KIPM Technical Campus into a vibrant community where innovation thrives and dreams take flight.`
  },
  {
    id: 2,
    name: 'Mrs. Sunita Singh',
    image: '/images/Director2(1)(1).png',
    description: `Meet the compassionate Director of KIPM Innovators Foundation, a driving force behind creating a supportive and empowering environment for women in the startup ecosystem.

    With a profound understanding of the unique challenges faced by women entrepreneurs, our Director envisions a workspace where every woman feels valued and empowered to pursue her dreams.

    Drawing from extensive experience in business development, our Director has transformed KIPM Innovators Foundation into a nurturing space where women can thrive and excel. Through mentorship, resources, and networking opportunities, she has helped countless women break barriers and achieve success.

    Her unwavering commitment to gender equality and belief in the power of community continue to inspire and uplift women from all backgrounds.

    Welcome to KIPM Innovators Foundation, where every woman's potential is realized, and the future is filled with endless possibilities.`
  },
];

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <div className="about-page">
        <div className="header">
          <h1>About us</h1>
        </div>
        
        <div className="about-container">
        <div className="about-image-section">
          </div>
          <div className="about-text-section">
            <div className="about-text-subsection">
              
              <h1 className='h2-heading'>We ignite the sparks of innovation that light the future.</h1>
              

          </div>
              <p>KIPM Innovators Foundation - Innovation & Incubation Center (KIF-IIC) supports creative ideas, business start-ups, and government goals.
                Established in 2022, we boosts new ideas, encourages entrepreneurship, and links start-up with mentors, investors, industries.
                With a sprawling area of 10,000 sq ft and room for 20 start-ups, our space offers state-of-the-art Fab Lab facilities and a lively environment conducive to start-up growth. Beyond mere infrastructure, we are a united community, igniting the spirit of entrepreneurship and propelling it towards a bright future.</p>
              

            </div>
            

          
        </div>




        <div className="vision-container">

          <div className="vision-image-section">

          </div>
          <div className="vision-text-section">
            <div className="vision-text-subsection">
              <h1>Our Vision</h1>
              <h6>Fueling the next generation of innovators!</h6>
              <p>Cultivating Sustainable Futures, Igniting Innovation - A Catalyst for Entrepreneurial Transformation and Global Well-being. </p>

            </div>
          </div>


        </div>




        <div className="mission-container">

          <div className="mission-image-section">

          </div>
          <div className="mission-text-section">
            <div className="mission-text-subsection">
              <h1>Our Mission</h1>
              <h6>With us, your vision gets the wings to soar in the global arena of innovation!</h6>
              <p> At KIPM Innovators Foundation, we envision a future where Individual emerges as a dynamic entrepreneur,
                equipped with the skills, mindset, and resources to pioneer innovative solutions.
                Our mission is to cultivate a vibrant ecosystem that nurtures entrepreneurial spirit,
                promotes a unique creativity, and advocates for sustainable business practices with a
                profound consideration for the environment and the well-being of mankind.</p>

            </div>
          </div>


        </div>


        <br />

        {/* Directors Section */}
        <div className="directors-section">
          <h2 className="dicr">Our Directors</h2>
          {directors.map((director, index) => (
            <div key={director.id} className={`director-item ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
              {index % 2 === 0 ? (
                <>
                  <img src={director.image} alt={director.name} className="director-image" />
                  <div className="director-info">
                    <h3>{director.name}</h3>
                    <p className='h2-heading'>{director.description}</p>
                  </div>
                </>
              ) : (
                <>
                 <img src={director.image} alt={director.name} className="director-image" />
                  <div className="director-info">
                    <h3>{director.name}</h3>
                    <p className='h2-heading'>{director.description}</p>
                  </div>
                 
                </>
              )}
            </div>
          ))}
        </div>



      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;