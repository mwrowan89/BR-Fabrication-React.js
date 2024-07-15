import React from "react";
import imageData from "./ImageData";

const GalleryPhotoSlide = () => {
  return (
    <>
      <div className="gallery-slide-container">
        {imageData.map((image, index) => (
          <img
            className="gallery-slide-image"
            key={index}
            src={image.src}
            alt={image.desc}
          />
        ))}
      </div>
    </>
  );
};

export default GalleryPhotoSlide;
