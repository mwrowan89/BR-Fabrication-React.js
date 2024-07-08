import React from "react";
import "../css/GalleryPhotos.css";
import ImageData from "./ImageData";

const GalleryPhotos = () => {
  return (
    <div className="gallery-images-container">
      {ImageData.map((image) => (
        <img key={image.id} src={image.src} alt="any" />
      ))}
    </div>
  );
};

export default GalleryPhotos;
