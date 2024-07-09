import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import imageData from "../components/ImageData";

const DetailsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const imageId = parseInt(query, 10);

  const image = imageData.find((img) => img.id === imageId);

  return (
    <div>
      {image ? (
        <div>
          <h2>{image.id}</h2>
          <p>{image.desc}</p>
        </div>
      ) : (
        <p>No image found.</p>
      )}
    </div>
  );
};

export default DetailsPage;
