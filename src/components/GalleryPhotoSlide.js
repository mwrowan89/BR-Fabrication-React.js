import { useState, useEffect } from "react";
import React from "react";
import imageData from "./ImageData";

const GalleryPhotoSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const next = () => {
  //   setCurrentIndex((prevIndex) => prevIndex + 1);
  // };

  // const prev = () => {
  //   setCurrentIndex((prevIndex) => prevIndex - 1);
  // };

  const currentImg = imageData[Math.abs(currentIndex) % imageData.length];

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   if (event.target.className === "prev") {
  //     prev();
  //     console.log(imageData.length);
  //   } else if (event.target.className === "next") {
  //     next();
  //   }
  // };

  return (
    <>
      <div className="photo-slide">
        <div>
          {imageData.map((image, index) => (
            <img
              className="gallery-slide-image"
              key={index}
              src={image.src}
              alt={image.desc}
            />
          ))}
        </div>

        {/* <div className="buttons">
          <a className="prev" onClick={handleClick} href="/">
            &#10094; Previous
          </a>
          <a className="next" onClick={handleClick} href="/">
            Next &#10095;
          </a>
        </div> */}
      </div>
    </>
  );
};

export default GalleryPhotoSlide;
