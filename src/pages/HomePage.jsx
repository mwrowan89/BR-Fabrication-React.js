import React from "react";
import { useEffect } from "react";
import "../css/Home.css";
import Nav from "../components/Nav";
import PhotoSlide from "../components/PhotoSlide";
import HomePageDesc from "../components/HomePageDesc";
import image1 from "../assets/images/IMG_1780.JPG";
import TopBanner from "../components/TopBanner";

export default function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      const buttons = document.querySelectorAll(".box-one, .box-two");
      const scrollPosition = window.scrollY + window.innerHeight;

      buttons.forEach((button) => {
        if (scrollPosition > button.offsetTop) {
          button.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <TopBanner />
      {/* <div id="home-page-nav">
        <Nav />
      </div> */}

      <div className="home-page-background">
        <img
          id="home-page-background-image"
          src={image1}
          alt="Bakan Restaurant Table"
        />
      </div>
      <div className="home-container">
        <HomePageDesc />
        <PhotoSlide />
      </div>
    </>
  );
}
