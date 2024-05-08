import React from "react";
import "./Nav.css"
function Nav() {
  return (
    <div className="greetings">
    <h1> BR Fabrication</h1><br/>
    <h2>Heirloom Quality Furniture for Commercial & Residential Spaces</h2> <br/>
      <div className="links">
        <a href="https://www.instagram.com/fromcheftotable/" target="_blank" rel="noopener noreferrer"><img id="insta" src="./assets/Screenshot (19).png" width="33" height="33" alt="Instagram link"/></a> &nbsp; || &nbsp;
        <a href="https://www.facebook.com/fromcheftotable/?locale=it_IT" target="_blank" rel="noopener noreferrer"><img src="./assets/facbook logo11.png" width="22" height="22" alt="FaceBook Link"/></a>
      </div>
  </div>
  );
}

export default Nav;

