import React, { useEffect, useState } from "react";
import imageData from "./ImageData";

const GalleryPhotoSlide = () => {
  const [shuffledImages, setShuffledImages] = useState([]);

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
  return (
    <>
      <div className="gallery-slide-container">
        <div className="gallery-slide-track">
          {shuffledImages.map((image, index) => (
            <img
              className="gallery-slide-image"
              key={index}
              src={image.src}
              alt={image.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryPhotoSlide;
