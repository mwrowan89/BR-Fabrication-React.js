import React, { useState } from "react";
import "../css/GalleryPhotos.css";
import ImageData from "./ImageData";
import { useNavigate } from "react-router-dom";

const GalleryPhotos = () => {
  const [selection, setSelection] = useState("all");
  const navigate = useNavigate();

  const handleNavigation = (path, query) => {
    navigate(`${path}?query=${query}`);
  };
  return (
    <div>
      <div className="com-res-btns">
        <h2 onClick={() => setSelection("com")}>Commercial Works</h2>
        <h2 onClick={() => setSelection("res")}>Residential Works</h2>
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
