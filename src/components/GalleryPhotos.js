import React from "react";
import "../css/GalleryPhotos.css";
import ImageData from "./ImageData";
import { useNavigate } from "react-router-dom";

const GalleryPhotos = () => {
  const navigate = useNavigate();

  const handleNavigation = (path, query) => {
    navigate(`${path}?query=${query}`);
  };
  return (
    <div className="gallery-images-container">
      {ImageData.map((image) => (
        <img
          onClick={() => handleNavigation("/details", image.id)}
          id="gallery-image"
          key={image.id}
          src={image.src}
          alt="any"
        />
      ))}
    </div>
  );
};

export default GalleryPhotos;
