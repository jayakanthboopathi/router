import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import '../Css/Services.css';

const Contact = () => {
  return (
    <div>

<h1>Contact us</h1>
<div>
  <label htmlFor="name">Name</label>
  <input type="text" placeholder="enter your name"/>
</div>
<div>
  <label htmlFor="email">Email</label>
  <input type="email" placeholder="enter your email"/>
</div>
<div>
  <label htmlFor="password">Password</label>
  <input type="password" placeholder="enter your password"/>
</div>
<div>
  <label htmlFor="mobile">Mobileno</label>
  <input type="mobile" placeholder="enter your mobileno"/>
</div>
<div className="btn-box">
              <div className="btn">
              <Link to="/" className="submit" >
              <input type="submit" value="Submit"></input>
              </Link>
              </div>
            </div>

        
    
    </div>
  );
};

export default withRouter(Contact);