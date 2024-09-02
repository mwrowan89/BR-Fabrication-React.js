import React from "react";
import { useState } from "react";
import FacebookLogo from "../assets/images/facbook logo11.png";
import InstagramLogo from "../assets/images/Screenshot (19).png";
import "../css/Request.css";

const Request = () => {
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

  const sendEmail = (e, contact) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `More Information Request from: ${contact.full}`
    );
    const body = encodeURIComponent(
      `I would like to request more information about the following:\n\n ${contact.message}`
    );

    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 0);
  };
  return (
    <div>
      <h1>Send Request</h1>
      <p>To ask for custom requests please use the input form below</p>
      <div>
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
        <button
          id="contact-us-button"
          type="submit"
          onClick={(e) => sendEmail(e, contact)}
        >
          Send
        </button>
      </div>
      <div>
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
          <img src={FacebookLogo} width="22" height="22" alt="FaceBook Link" />
        </a>
      </div>
      <div>
        <h1>Request Private Showing</h1>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default Request;
