import React from "react";
import { useEffect } from "react";
import image2 from "../assets/images/IMG_1779.JPG";
import image3 from "../assets/images/36.jpg";
import image4 from "../assets/images/54.jpg";
import image5 from "../assets/images/55.jpg";

const HomePageDesc = () => {
  useEffect(() => {
    const handleScroll = () => {
      const buttons = document.querySelectorAll(
        ".box-one, .box-two, .box-three-left, .box-three-right, #box-three-title"
      );
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
          <div className="home-text">
            <h3>BR Fabrications</h3>
            <p>
              Servicing restaurants and clients around the world, BR Fabrication
              is a professional table manufacture.
            </p>
          </div>
        </div>
        <div className="box-two">
          <div id="box-two-p" className="home-text">
            <h3>Our Mission</h3>
            <p>
              We strive to provide the most exceptionally crafted heirloom
              quality furniture for every customer. The resources we use are all
              ethically sourced and handcrafted in Chicago, Illinois.
            </p>
          </div>
          <img id="bakan-desc-img-two" src={image3} alt="Bakan" />
        </div>
        <div className="box-three-whole">
          <h1 id="box-three-title">Your Dream is Our Passion</h1>

          <div className="box-three">
            <div className="box-three-left">
              <img id="aspen-desc-img-one" src={image4} alt={image4.desc} />
            </div>
            <div className="box-three-right">
              <img id="aspen-desc-img-two" src={image5} alt={image5.desc} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageDesc;
