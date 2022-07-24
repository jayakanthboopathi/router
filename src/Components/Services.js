import React from "react";
import { withRouter } from "react-router";
// import { Link } from "react-router-dom";
// import servicepage from '../Images/servicepage.jpg';
import servicepage1 from '../Images/servicepage1.jpg';
import '../Css/HomeAbout.css';


const Services = () => {
  return (
    <div>

<h1>  Our Services</h1>
{/* <div className="imagecontainer2">
          <img src={servicepage} alt="servicepage"/>
        </div> */}
        <div className="imagecontainer3">
          <img src={servicepage1} alt="servicepage1"/>
        </div>

        
    
    </div>
  );
};

export default withRouter(Services);