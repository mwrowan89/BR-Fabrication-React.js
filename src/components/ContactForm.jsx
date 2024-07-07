import React, { useState } from "react";
import "../css/ContactForm.css";

const ContactForm = () => {
  const [contact, setContact] = useState({
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
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
      <h1>Please provide information to get in touch with us!</h1>
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="first"
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
          Avatar URL:
          <input
            type="text"
            name="avatar"
            value={contact.avatar}
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
