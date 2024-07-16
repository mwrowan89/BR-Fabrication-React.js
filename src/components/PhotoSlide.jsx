import React, { useEffect, useState } from "react";
import "../css/PhotoSlide.css";
import imageData from "./ImageData";

function PhotoSlide() {
  const [timer, setTimer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledImages, setShuffledImages] = useState([]);

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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledImages.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + shuffledImages.length) % shuffledImages.length
    );
  };

  useEffect(() => {
    const shuffledArray = (array) => {
      const shuffled = array.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    setShuffledImages(shuffledArray(imageData));
  }, []);

  const handleClick = (selection) => {
    if (selection === "prev") {
      prev();
    } else if (selection === "next") {
      next();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const buttons = document.querySelectorAll(".prev, .next");
      const scrollPosition = window.scrollY + window.innerHeight;

      buttons.forEach((button) => {
        if (scrollPosition > button.offsetTop) {
          button.classList.add("show");
        } else {
          button.classList.remove("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentImg =
    shuffledImages.length > 0
      ? shuffledImages[Math.abs(currentIndex) % shuffledImages.length]
      : null;
  return (
    <>
      <div className="photo-slide">
        {currentImg && (
          <img className="slide-image" src={currentImg.src} alt="" />
        )}
        <div className="buttons">
          <p className="prev" onClick={() => handleClick("prev")}>
            &#10094; Previous
          </p>
          <p className="next" onClick={() => handleClick("next")}>
            Next &#10095;
          </p>
        </div>
      </div>
    </>
  );
}

export default PhotoSlide;
