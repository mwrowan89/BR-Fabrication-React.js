import React from "react";
import "../css/Home.css";
import Nav from "../components/Nav";
import PhotoSlide from "../components/PhotoSlide";
import image1 from "../assets/images/IMG_1780.JPG";

export default function HomePage() {
  return (
    <>
      <Nav />
      <div className="home-page-background">
        <img src={image1} alt="w/e" />
      </div>
      <div className="home-container">
        <PhotoSlide />
      </div>
    </>
  );
}
