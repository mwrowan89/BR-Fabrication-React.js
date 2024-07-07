import React, { useState } from "react";
import "../css/ContactForm.css";
import image from "../assets/images/Andros.png";

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
  };

  return (
    <div className="contact-us">
      <div className="contact-us-image">
        <img id="contact-us-image" src={image} alt="andros taverna" />
      </div>
      <form className="contact-us-form">
        <h1 id="contact-us-title">Contact Us</h1>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
