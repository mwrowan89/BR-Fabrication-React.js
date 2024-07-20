import React, { useState, useEffect } from "react";
import GalleryPhotos from "./GalleryPhotos";
import FilterBox from "./FilterBox";
import imageData from "./ImageData";

const GalleryApp = () => {
  const [filteredImages, setFilteredImages] = useState(imageData);
  const [selection, setSelection] = useState("all");
  const [type, setType] = useState("all");

  const filterImages = (newSelection) => {
    setSelection(newSelection);
  };

  const filterByType = (typeSelection) => {
    setType(typeSelection);
  };

  useEffect(() => {
    let filtered = imageData;

    if (selection === "all") {
      filtered = imageData;
    } else if (selection === "com" || "res") {
      filtered = filtered.filter((image) => image.customer === selection);
    } else if (selection === "table" || "deco") {
      filtered = filtered.filter((image) => image.type === selection);
    }

    setFilteredImages(filtered);
  }, [selection, type]);

  return (
    <div>
      <FilterBox
        selection={selection}
        filterImages={filterImages}
        filterByType={filterByType}
      />
      <GalleryPhotos filteredImages={filteredImages} />
    </div>
  );
};

export default GalleryApp;
