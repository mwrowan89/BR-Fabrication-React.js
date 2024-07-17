import React from "react";
import "../css/Home.css";
import Nav from "../components/Nav";
import PhotoSlide from "../components/PhotoSlide";
import image1 from "../assets/images/IMG_1780.JPG";
import image2 from "../assets/images/IMG_1779.JPG";

export default function HomePage() {
  return (
    <>
      <Nav />
      <div className="home-page-background">
        <img
          id="home-page-background-image"
          src={image1}
          alt="Bakan Restaurant Table"
        />
      </div>
      <div className="home-container">
        <div className="description-box">
          <img id="bakan-desc-img" src={image2} alt="Bakan Feature" />
          <div className="text">
            <h3>BR Fab</h3>
            <p>
              Servicing restaurants and clients around the world, BR Fabrication
              is a professional table manufacture.
            </p>
          </div>
        </div>
        <PhotoSlide />
      </div>
    </>
  );
}
