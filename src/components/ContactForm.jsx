import React from "react";

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
    <div>
      <form>
        <h1>Please provide information to get in touch with us!</h1>
        <form>
          <div className="contact-input">
            <h3>
              First Name: <input type="text" />
              Last Name: <input type="text" />
            </h3>
          </div>
        </form>
      </form>
    </div>
  );
};

export default ContactForm;
