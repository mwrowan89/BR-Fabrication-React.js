import React from "react";
import { useEffect } from "react";
import image2 from "../assets/images/IMG_1779.JPG";
import image3 from "../assets/images/36.jpg";

const HomePageDesc = () => {
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
      <div className="description-box">
        <div className="box-one">
          <img id="bakan-desc-img-one" src={image2} alt="Bakan Feature" />
          <div className="text">
            <h3>BR Fabrications</h3>
            <p>
              Servicing restaurants and clients around the world, BR Fabrication
              is a professional table manufacture.
            </p>
          </div>
        </div>
        <div className="box-two">
          <img id="bakan-desc-img-two" src={image3} alt="Bakan" />
        </div>
      </div>
    </>
  );
};

export default HomePageDesc;
