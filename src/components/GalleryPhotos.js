import React, { useState } from "react";
import "../css/GalleryPhotos.css";
import ImageData from "./ImageData";
import { useNavigate } from "react-router-dom";

const GalleryPhotos = () => {
  const [selection, setSelection] = useState("all");
  const [page, setPage] = useState(1);
  const imagesPerPage = 10;
  const navigate = useNavigate();

  const handleNavigation = (path, query) => {
    navigate(`${path}?query=${query}`);
  };

  const nextPage = () => {
    setPage((page) => page + 1);
  };
  const prevPage = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };

  const startIndex = (page - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = ImageData.slice(startIndex, endIndex);

  return (
    <div>
      <div className="com-res-btns">
        <h2 onClick={() => setSelection("com")}>Commercial Works</h2>
        <h2 onClick={() => setSelection("res")}>Residential Works</h2>
      </div>
      <div className="gallery-images-container">
        {currentImages.map((image) => (
          <img
            onClick={() => handleNavigation("/details", image.id)}
            id="gallery-image"
            key={image.id}
            src={image.src}
            alt={image.desc}
          />
        ))}
      </div>
      <div className="next-prev-buttons">
        <h3
          id="prev"
          onClick={(e) => {
            e.preventDefault();
            prevPage();
          }}
        >
          Prev Page
        </h3>
        <p>{page}</p>
        <h3
          id="next"
          onClick={(e) => {
            e.preventDefault();
            nextPage();
          }}
        >
          Next Page
        </h3>
      </div>
    </div>
  );
};

export default GalleryPhotos;
