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

  return (
    <div>
      <h1>Send Request</h1>
      <p>To ask for custom requests please use the input form below</p>
    </div>
  );
};

export default Request;
