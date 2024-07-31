import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import "../css/Designs.css";

import image1 from "../assets/images/Wine Cellar/IMG_1201.png";

const DesignsPage = () => {
  return (
    <div>
      <Header />
      <Nav />
      <div className="design-page">
        <div className="design-box-one">
          <h1 id="design-page-title">Custom Designs</h1>
          <p id="design-page-desc">
            In addition to our woodworking expertise, BR Fabrication also
            specializes in creating custom computer designs tailored to the
            specific requirements and preferences of our clients. Whether it’s
            building high-performance workstations for professional use or
            personalized gaming setups, we ensure that each design meets the
            unique specifications of our customers. Our attention to detail and
            commitment to quality extend to this area, resulting in bespoke
            systems that blend functionality with aesthetic appeal. This service
            underscores our dedication to delivering personalized solutions that
            cater to a wide range of needs and tastes.
          </p>
        </div>
        <div className="design-box-two">
          <img src={image1} alt="wine celler" />
        </div>
      </div>
    </div>
  );
};

export default DesignsPage;
