import React, { useState } from "react";
import "../css/ContactForm.css";
import image from "../assets/images/Andros.png";
import InstagramLogo from "../assets/images/Screenshot (19).png";
import FacebookLogo from "../assets/images/facbook logo11.png";

const ContactForm = () => {
  const [contact, setContact] = useState({
    full: "",
    email: "",
    message: "Some notes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
    console.log(contact);
  };

  return (
    <div className="contact-us">
      <div className="contact-us-image">
        <img id="contact-us-image" src={image} alt="andros taverna" />
      </div>

      <form className="contact-us-form">
        <h1 id="contact-us-title">Contact Us</h1>
        <div className="contact-us-container">
          <div className="contact-us-labels">
            <label>
              Full Name <br />
              <input
                id="textarea"
                type="text"
                name="full"
                value={contact.first}
                onChange={handleChange}
              />
            </label>
            <label>
              Email <br />
              <input
                id="textarea"
                type="text"
                name="email"
                value={contact.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Message <br />
              <textarea
                id="textarea"
                name="message"
                value={contact.notes}
                onChange={handleChange}
              />
            </label>
            <br />
            <button id="contact-us-button" type="submit">
              Contact Us
            </button>
          </div>
          <div className="our-info">
            {/* <h2>Contact</h2>
            <p>ben@fromcheftotable.com</p>
            <h2>Based in</h2>
            <p>Chicago, IL</p> */}
            <br />
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
              &nbsp; &nbsp;
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
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
