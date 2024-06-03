import React from "react";
import image1 from '../assets/meeting.png';

import image2 from '../assets/customer-service.png';
import image3 from '../assets/negotiation.png';
import image4 from '../assets/round-table (1).png';
function Features(){
    return(
       <div className="page2">
         <div id="cards-container">
        <div className="service">
          <div className="service-icon"><img src={image1} alt="" height="100px" width="100px" /></div>
          <div className="service-title">Comfy Office</div>
          <div className="service-desc">Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </div>
        </div>
        <div className="service">
          <div className="service-icon"><img src={image2} alt="" height="100px" width="100px" /></div>
          <div className="service-title">Call Answering</div>
          <div className="service-desc">Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </div>
        </div>
        <div className="service">
          <div className="service-icon"><img src={image3} alt="" height="100px" width="100px" /></div>
          <div className="service-title">Negotiating</div>
          <div className="service-desc">Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </div>
        </div>
        <div className="service">
          <div className="service-icon"><img src={image4} alt="" height="100px" width="100px" /></div>
          <div className="service-title">Conference Room</div>
          <div className="service-desc">Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </div>
        </div>

      </div>
       
       </div>
    );
}
export default Features;