import React from "react";
import { useState } from "react";

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
      </div>
    </div>
  );
};

export default Request;
