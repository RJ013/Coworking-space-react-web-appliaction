import React from 'react';
import './css/StartupPage.css'; // Import the CSS file for component-specific styling
import NavBar from './NavBar';
import Footer from './Footer';

const StartupPage = () => {
  const startups = [
    {
      id: 1,
      image: 'Image1.jpeg',
      description: 'Vamp Attire',
      Founder: 'Vivek nishad',
      CoFounder: 'Abhay singh',
      additionalPara: `We specialize in imaginative T-shirt designs and crafting garments tailored to the latest fashion trends as a clothing brand. Our unique styles cater to diverse tastes, ensuring every piece stands out. We prioritize sustainability in our production processes, using eco-friendly materials. Join us in revolutionizing the fashion industry, one stylish garment at a time.`
    },
    {
      id: 2,
      image: 'Image2.jpeg',
      description: 'Glojor',
      Founder: 'Akash sharma',
      CoFounder: 'Aman sharma',
      additionalPara: `We're pioneering energy-efficient smart LED lights, motion-based outdoor lights, and crafting a smart table lamp to enhance study focus, especially with books. Our innovative lighting solutions are designed to be both functional and aesthetically pleasing. By integrating advanced technology, we create products that are not only energy-saving but also enhance your living spaces. Experience the future of lighting with Glojor.`
    },
    {
      id: 3,
      image: 'Image3.jpeg',
      description: 'Vamp Security',
      Founder: 'Priyanshu prataap singh',
      CoFounder: 'Mithun mishra',
      additionalPara: `We're a modern AI-driven startup focused on developing smart security cameras to protect your home or office & feel safe. Our cameras utilize cutting-edge AI technology to provide real-time alerts and detailed monitoring. We aim to set new standards in security with our user-friendly and highly effective solutions. Trust Vamp Security for unparalleled peace of mind.`
    },
    {
      id: 4,
      image: 'Image4.jpg',
      description: 'Urbhydro Kishan Private Limited',
      Founder: ' Subhankar Chauhan',
      CoFounder: 'Atul mishra',
      additionalPara: `We're designing a Hydroponics/Aeroponics system for growing vegetables, fruits, and flowers in the comfort of your own home, without the need for soil, sunlight. Our systems are perfect for urban living, making it easy to grow fresh produce indoors. With user-friendly designs, even beginners can enjoy the benefits of home gardening. Embrace sustainable living with Urbhydro Kishan.`
    },
    {
      id: 5,
      image: 'Image5.jpeg',
      description: 'Do while',
      Founder: 'Shivansh vikram',
      CoFounder: 'Vivek kumar',
      additionalPara: `We're leading the way in electronics, focusing on wearable gadgets and robots to make your life easier and more enjoyable. Our innovative products are designed to seamlessly integrate into your daily routine. We strive to enhance your lifestyle with cutting-edge technology that offers convenience and efficiency. Discover the future of personal electronics with Do while.`
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="header">
        <h1>Our Startups</h1>
      </div>
      <div className="startup-container">
        {startups.map((startup, index) => (
          <div key={startup.id} className="startup-item">
            {index % 2 === 0 ? (
              <>
                <img src={`/images/${startup.image}`} alt={`Image of ${startup.description}`} />
                <div className="startup-details">
                  <h1>{startup.description}</h1>
                  <p  className='cofounder1'>Co-Founder: {startup.Founder}</p>
                  <p className='cofounder'>Co-Founder: {startup.CoFounder}</p>
                  <p>{startup.additionalPara}</p>
                </div>
              </>
            ) : (
              <>
                <div className="startup-details">
                  <h1>{startup.description}</h1>
                  <p className='cofounder1'>Co-Founder: {startup.Founder}</p>
                  <p className='cofounder'>Co-Founder: {startup.CoFounder}</p>
                  <p>{startup.additionalPara}</p>
                </div>
                <img src={`/images/${startup.image}`} alt={`Image of ${startup.description}`} />
              </>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default StartupPage;
