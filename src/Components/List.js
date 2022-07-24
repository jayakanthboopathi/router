import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import '../Css/ListStyle.css';
import logo from '../Images/logo.png';


const List = () => {
  return (
    <header>
    <div>
      <div className="container container-flex">
        <div className="logocontainer">
            <img src={logo} alt="logo" className="logo"/>
        </div>

     <nav>
        <div className="list">
        <Link to="/" className="listitem" activeClassName="activeitem">Home</Link>
        <Link to="/about" className="listitem" activeClassName="activeitem">About</Link>
        <Link to="/services"className="listitem" activeClassName="activeitem">Services</Link>
        <Link to="/contact"className="listitem" activeClassName="activeitem">Contact</Link>
        <Link to="/policy"className="listitem" activeClassName="activeitem">Policy</Link>
        </div>
        
     

     
     </nav>

        
    
    </div>
    </div>
    </header>
  );
};

export default withRouter(List);