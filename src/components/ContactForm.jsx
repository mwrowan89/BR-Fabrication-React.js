import React from "react";
import "../css/ContactForm.css";

const ContactForm = () => {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div className="contact-us">
      <h1>Please provide information to get in touch with us!</h1>
      <form>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" />
        <textarea type="text" id="query" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
