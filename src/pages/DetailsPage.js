import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import imageData from "../components/ImageData";
import Nav from "../components/Nav";

const DetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get("page") || 1;
  const selection = queryParams.get("selection") || "all";
  const imageId = Number(queryParams.get("id"));

  const image = imageData.find((img) => img.id === imageId);

  const goBack = () => {
    navigate(`/gallery?page=${page}&selection=${selection}`);
  };

  return (
    <div className="details-page">
      <Nav />
      <button className="back" onClick={goBack}>
        &#10094; Back to Gallery
      </button>
      {image ? (
        <div className="details-page-container">
          <h2 className="details-page-title">{image.title}</h2>
          <p className="details-page-desc">{image.desc}</p>
          <img id="details-page-img" src={image.src} alt={image.desc} />
        </div>
      ) : (
        <p>No image found.</p>
      )}
    </div>
  );
};

// CSS located in GalleryPhotos.css

export default DetailsPage;
