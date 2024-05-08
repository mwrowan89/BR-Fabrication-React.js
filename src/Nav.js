import React from "react";
import "./Nav.css"
import InstagramLogo from './assets/Screenshot (19).png';
import FacebookLogo from './assets/facbook logo11.png';

function Nav() {
  return (
    <div className="greetings">
    <h1> BR Fabrication</h1>
    <h3>Heirloom Quality Furniture for Commercial & Residential Spaces</h3> <br/>
      <div className="links">
        <a href="https://www.instagram.com/fromcheftotable/" target="_blank" rel="noopener noreferrer"><img id="insta" src={InstagramLogo} width="33" height="33" alt="Instagram link"/></a> &nbsp; || &nbsp;
        <a href="https://www.facebook.com/fromcheftotable/?locale=it_IT" target="_blank" rel="noopener noreferrer"><img src={FacebookLogo} width="22" height="22" alt="FaceBook Link"/></a>
      </div>
  </div>
  );
}

export default Nav;

