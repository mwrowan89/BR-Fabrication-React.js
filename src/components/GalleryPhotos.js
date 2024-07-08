import React from "react";
import "../css/GalleryPhotos.css";
import ImageData from "./ImageData";

const GalleryPhotos = () => {
  return (
    <div className="gallery-images-container">
      {ImageData.map((image) => (
        <div key={image.index}>
          <img src={image} alt="any" />
        </div>
      ))}
    </div>
  );
};

export default GalleryPhotos;
