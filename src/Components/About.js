import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import '../Css/HomeAbout.css';
import aboutpage from '../Images/aboutpage.jpg';
import '../Css/HomeAbout.css';


const About = () => {
  
    return (
      <div>
      <div className="main">
        <div className="mainsection">
          <div className="contentbox">
            <h1>Know More About Us</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <div className="btn-box">
              <div className="btn">
              <Link to="/services" className="Knowmore" >Know more</Link>
              </div>
            </div>
          </div>
          <div className="imagecontainer1">
            <img src={aboutpage} alt="aboutpage"/>
          </div>
        </div>
  
  
          
      
      </div>
      </div>
    );
  };

export default withRouter(About);