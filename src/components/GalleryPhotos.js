import React from "react";
import "../css/GalleryPhotos.css";
import imageData from "./imageData";

const GalleryPhotos = () => {
  return (
    <div className="gallery-images-container">
      {imageData.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default GalleryPhotos;
