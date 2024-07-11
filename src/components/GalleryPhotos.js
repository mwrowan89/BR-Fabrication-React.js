import React, { useState } from "react";
import "../css/GalleryPhotos.css";
import { useNavigate, useLocation } from "react-router-dom";
import imageData from "./ImageData";

const GalleryPhotos = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get("page")) || 1;
  const initialSelection = queryParams.get("selection") || "all";

  const [selection, setSelection] = useState(initialSelection);
  const [page, setPage] = useState(initialPage);
  const navigate = useNavigate();

  const handleNavigation = (path, id) => {
    navigate(`${path}?id=${id}&page=${page}&selection=${selection}`);
  };

  const nextPage = () => {
    setPage((page) => page + 1);
  };
  const prevPage = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };

  return (
    <div>
      <div className="com-res-btns">
        <h2 onClick={() => setSelection("com")}>Commercial Works</h2>
        <h2 onClick={() => setSelection("res")}>Residential Works</h2>
      </div>
      <div className="gallery-images-container">
        {imageData.map((image) =>
          image.page === page ? (
            <img
              onClick={() => handleNavigation("/details", image.id)}
              id="gallery-image"
              key={image.id}
              src={image.src}
              alt={image.desc}
            />
          ) : null
        )}
      </div>
      <div className="gallery-next-prev-btn">
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
