import React, { useState } from "react";
import "../css/ContactForm.css";
import image from "../assets/images/Andros.png";

const ContactForm = () => {
  const [contact, setContact] = useState({
    first: "",
    last: "",
    email: "",
    twitter: "your_handle",
    notes: "Some notes",
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
        <img src={image} alt="andros taverna" />
      </div>
      <form className="contact-us-form">
        <h1>Contact Us</h1>
        <label>
          First Name:
          <input
            type="text"
            name="first"
            placeholder="First"
            value={contact.first}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last"
            value={contact.last}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Twitter Handle:
          <input
            type="text"
            name="twitter"
            value={contact.twitter}
            onChange={handleChange}
          />
        </label>
        <label>
          Notes:
          <textarea
            name="notes"
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
