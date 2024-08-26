import React from "react";
import "../css/Footer.css";
import InstagramLogo from "../assets/images/Screenshot (19).png";
import FacebookLogo from "../assets/images/facbook logo11.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <p>All Rights Reserved BR Fabrication</p>
        <h4>Contact Information</h4>
        <p>
          Email:{" "}
          <a href="mailto:ben@fromcheftotable.com">ben@fromcheftotable.com</a>
        </p>

        <p>Phone: (347)-205-7721 </p>
      </div>
      <div className="footer-middle">
        <div className="links-footer">
          <a
            href="https://www.instagram.com/fromcheftotable/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="insta-logo"
              src={InstagramLogo}
              width="33"
              height="33"
              alt="Instagram link"
            />
          </a>

          <a
            id="facebook-logo"
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
        <a href="/contact">Request a Quote </a>
      </div>
    </div>
  );
}

export default Footer;
