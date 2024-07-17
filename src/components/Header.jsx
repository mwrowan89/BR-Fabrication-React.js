import React from "react";
import "../css/Header.css";
import InstagramLogo from "../assets/images/Screenshot (19).png";
import FacebookLogo from "../assets/facbook logo11.png";

function Header() {
  return (
    <div className="greetings">
      <h1 id="header-title"> BR Fabrication</h1>
      <h3 id="header-desc">
        Heirloom Quality Furniture for Commercial & Residential Spaces
      </h3>
      <br />
      <div className="links">
        <a
          href="https://www.instagram.com/fromcheftotable/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="insta"
            src={InstagramLogo}
            width="33"
            height="33"
            alt="Instagram link"
          />
        </a>{" "}
        &nbsp; || &nbsp;
        <a
          href="https://www.facebook.com/fromcheftotable/?locale=it_IT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FacebookLogo} width="22" height="22" alt="FaceBook Link" />
        </a>
      </div>
    </div>
  );
}

export default Header;
