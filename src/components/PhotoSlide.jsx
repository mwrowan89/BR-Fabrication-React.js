import React, { useEffect, useState } from "react";
import "../css/PhotoSlide.css";
import imageData from "./ImageData";

function PhotoSlide() {
  const [timer, setTimer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledImages, setShuffledImages] = useState([]);
  const [fade, setFade] = useState(false);

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

  useEffect(() => {
    if (shuffledImages.length > 0) {
      startSlide();
      return () => {
        clearInterval(timer);
      };
    }
    // eslint-disable-next-line
  }, [shuffledImages]);

  const startSlide = () => {
    setTimer(setInterval(next, 5000));
  };

  const next = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledImages.length);
      setFade(false);
    }, 1000); // Match this duration with the CSS transition duration
  };

  const prev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + shuffledImages.length) % shuffledImages.length
      );
      setFade(false);
    }, 1000); // Match this duration with the CSS transition duration
  };

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
      <div className="photo-slide-whole">
        <div className="photo-slide">
          <div className="slide-show-text">
            <h3>Showcase</h3>
            <p>Check out our gallery for even more completed projects</p>
          </div>

          {currentImg && (
            <img
              className={`slide-image ${fade ? "" : "active"}`}
              src={currentImg.src}
              alt=""
            />
          )}
          <div className="next-prev-buttons">
            <p className="prev" onClick={() => handleClick("prev")}>
              &#10094; Previous
            </p>
            <p className="next" onClick={() => handleClick("next")}>
              Next &#10095;
            </p>
          </div>
        </div>
        {/* Place content about versitile jobs */}
        <div className="slide-show-about">
          <h3 id="slide-show-title">
            Mastery in Commercial and Residential Projects
          </h3>
          <p id="slide-show-desc">
            BR Fabrication stands out in the industry with its unparalleled
            versatility, seamlessly handling both commercial and residential
            projects. Their expertise is exemplified through their work with
            "Lettuce Entertain You," the largest restaurant group in Chicago.
            From intricate residential installations to large-scale commercial
            ventures, BR Fabrication consistently delivers exceptional results,
            showcasing their commitment to quality and innovation.
          </p>
        </div>
      </div>
    </>
  );
}

export default PhotoSlide;
