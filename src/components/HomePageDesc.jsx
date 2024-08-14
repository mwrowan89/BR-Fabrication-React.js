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
          <div id="box-one-p" className="home-text">
            <h3>BR Fabrications</h3>
            <p>
              Servicing restaurants and clients globally, BR Fabrication is a
              premier manufacturer of high-quality tables. With a commitment to
              excellence and a focus on craftsmanship, we create bespoke tables
              tailored to meet the unique needs of each customer. Our products
              are known for their durability, elegance, and innovative design,
              making us a trusted partner for dining establishments and clients
              worldwide. At BR Fabrication, we blend tradition with modern
              technology to deliver exceptional furniture that enhances any
              space.
            </p>
          </div>
        </div>
        <div className="box-two">
          <div id="box-two-p" className="home-text">
            <h3>Our Mission</h3>
            <p>
              At BR Fabrication, we are dedicated to delivering heirloom-quality
              furniture, meticulously crafted to exceed the expectations of
              every customer. Our commitment to excellence is reflected in the
              superior craftsmanship and attention to detail that goes into each
              piece. We take pride in using ethically sourced materials,
              ensuring sustainability and integrity in our production process.
              Every item is handcrafted in our Chicago, Illinois workshop by
              skilled artisans who blend traditional techniques with modern
              innovations. Our furniture not only stands the test of time but
              also adds a touch of elegance and sophistication to any setting.
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
