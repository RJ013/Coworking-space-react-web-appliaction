import Video from '../assets/cyber.mp4'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

function Home() {
  return (
    <div>
   
    <video autoPlay loop muted className="bg-vid">
  <source src={Video} type="video/mp4" />
    </video>
    <div id="main">
    <div id="page1">
      <h1>COSPACE SUCCESS</h1>

      <span className="text first-text">
        <h2>WELCOME</h2>
      </span>
      <span className="text second-text">
        <h2>Our Spaces Can Help You Stay Productive!</h2>
      </span>
      <p>
        Cospace stands at the epicentre of innovation, connecting startups, corporates, academia, investors, and
        governments.
        Its unrivalled impact is forging new paths and leaving a bold footprint in what we define as “disruptive
        innovation”.
      </p>
     </div>
     </div>
    

     <div className="ad-container">
      <div className="text-section">
        <div className="text-subsection">
          <h6>MODERN OFFICE SPACES</h6>
          <h1>We are Built for Business — Explore the Space Today!</h1>
          <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.</p>
          <button className="join-button">JOIN US NOW</button>
        </div>
      </div>
    
      <div className="image-section">
        <div className="offer">
          <span>Just $99/mo when you sign up for 3 months!</span>
          <a href="/learn-more">Learn More</a>
        </div>
      </div>
    </div>



    <div className="container-sale">
      <div className="image-container">
        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Office Setup" />
      </div>
      <div className="content">
        <h2>Everything You Need to Get Started</h2>
        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia consequuntur magni.</p>
        <ul>
          <li>Sed ut perspiciatis</li>
          <li>Unde omnis iste</li>
          <li>Totam rem aperiam</li>
          <li>Numquam eius modi</li>
          <li>Magnam aliquam quae</li>
          <li>Ut enim ad minima</li>
        </ul>
      </div>
    </div>

    <div className="contact-form">
      <div className="form-group">
        <label htmlFor="name">
          <i className="icon-user"></i> Name
        </label>
        <input type="text" id="name" placeholder="Name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">
          <i className="icon-envelope"></i> Email Address
        </label>
        <input type="email" id="email" placeholder="Email Address" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">
          <i className="icon-phone"></i> Phone
        </label>
        <input type="tel" id="phone" placeholder="Phone" />
      </div>
      <div className="form-group">
        <label htmlFor="subject">
          <i className="icon-info"></i> Subject
        </label>
        <input type="text" id="subject" placeholder="Subject" />
      </div>
      <div className="form-group">
        <label htmlFor="message">
          <i className="icon-pencil"></i> How can we help you? Feel free to get in touch!
        </label>
        <textarea id="message" placeholder="How can we help you? Feel free to get in touch!"></textarea>
      </div>
      <button className="btn-primary">GET IN TOUCH</button>
      <div className="form-group">
        <input type="checkbox" id="agree" />
        <label htmlFor="agree">I agree that my data is collected and stored.</label>
      </div>
    </div>
    


</div> 
      

     
    
  );
}

export default Home;