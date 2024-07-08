import React, { useEffect, useState } from "react";
import "../css/PhotoSlide.css";
import imageData from "./ImageData";

function PhotoSlide() {
  const [timer, setTimer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    startSlide();
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line
  }, [currentIndex]);

  const startSlide = () => {
    setTimer(setInterval(next, 8000));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const currentImg = imageData[Math.abs(currentIndex) % imageData.length];

  const handleClick = (event) => {
    event.preventDefault();
    if (event.target.className === "prev") {
      prev();
    } else if (event.target.className === "next") {
      next();
    }
  };

  return (
    <>
      <div className="photo-slide">
        <img className="slide-image" src={currentImg.src} alt="" />

        <div className="buttons">
          <a className="prev" onClick={handleClick} href="/">
            &#10094; Previous
          </a>
          <a className="next" onClick={handleClick} href="/">
            Next &#10095;
          </a>
        </div>
      </div>
    </>
  );
}

export default PhotoSlide;
