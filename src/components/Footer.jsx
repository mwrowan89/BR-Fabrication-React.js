import React from "react";
import "../css/Footer.css";
import InstagramLogo from "../assets/images/Screenshot (19).png";
import FacebookLogo from "../assets/facbook logo11.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <p>All Rights Reserved BR Fabrication</p>
        <h4>Contact Information</h4>
        <p>Email: ben@fromcheftotable.com</p>
        <p>Phone: (312)-555-4800 </p>

        <div className="links-footer">
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
            <img
              src={FacebookLogo}
              width="22"
              height="22"
              alt="FaceBook Link"
            />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <p>Shop Hours: </p>
        <p>Mon-Fri: 9am-5pm</p>
        <p>Sat-Sun: Upon request</p>
        <p>Request a Quote</p>
      </div>
    </div>
  );
}

export default Footer;
