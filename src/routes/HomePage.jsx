import React from "react";
import '../css/Home.css';
import Nav from "../Nav/Nav";
import PhotoSlide from "../Photo Slide/PhotoSlide";

export default function HomePage() {
    return (
      <>
        <Nav/>
        <div className="home-container">
          <PhotoSlide />
        
          </div>
      </>
    );
  }
