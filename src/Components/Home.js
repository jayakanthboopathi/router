import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import homepage from '../Images/homepage.jpg';
import '../Css/HomeAbout.css';

const Home = () => {
  return (
    <div>
    <div className="main">
      <div className="mainsection">
        <div className="contentbox">
          <h1>Learning made easy</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <div className="btn-box">
            <div className="btn">
            <Link to="/about" className="readmore" >Read More</Link>
            </div>
          </div>
        </div>
        <div className="imagecontainer">
          <img src={homepage} alt="homepage"/>
        </div>
      </div>


        
    
    </div>
    </div>
  );
};

export default withRouter(Home);