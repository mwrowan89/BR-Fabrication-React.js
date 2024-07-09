import React from "react";
import { useLocation } from "react-router-dom";
import imageData from "../components/ImageData";
import Nav from "../components/Nav";

const DetailsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const imageId = parseInt(query, 10);

  const image = imageData.find((img) => img.id === imageId);

  return (
    <div>
      <Nav />
      {image ? (
        <div>
          <h2>{image.title}</h2>
          <img src={image.src} alt={image.desc} />
          <p>{image.desc}</p>
        </div>
      ) : (
        <p>No image found.</p>
      )}
    </div>
  );
};

export default DetailsPage;
