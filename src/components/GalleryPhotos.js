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
    <div>
      <div className="com-res-btns">
        <h2>Commercial Works</h2>
        <h2>Residential Works</h2>
      </div>
      <div className="gallery-images-container">
        {ImageData.map((image) => (
          <img
            onClick={() => handleNavigation("/details", image.id)}
            id="gallery-image"
            key={image.id}
            src={image.src}
            alt={image.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPhotos;
