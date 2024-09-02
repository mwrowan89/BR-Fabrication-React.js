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

  return (
    <div>
      <h1>Send Request</h1>
      <p>To ask for custom requests please use the input form below</p>
    </div>
  );
};

export default Request;
