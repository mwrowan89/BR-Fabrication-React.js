import React, { useState, useEffect } from "react";
import GalleryPhotos from "./GalleryPhotos";
import FilterBox from "./FilterBox";
import imageData from "./ImageData";

const GalleryApp = () => {
  const [filteredImages, setFilteredImages] = useState(imageData);
  const [selection, setSelection] = useState("all");

  const filterImages = (newSelection) => {
    setSelection(newSelection);
  };

  useEffect(() => {
    let filtered = imageData;

    if (selection === "all") {
      filtered = imageData;
    }
    if (selection === "com") {
      filtered = filtered.filter((image) => image.customer === selection);
    }
    if (selection === "res") {
      filtered = filtered.filter((image) => image.customer === selection);
    }
    if (selection === "deco") {
      filtered = filtered.filter((image) => image.type === selection);
    }
    console.log(selection);
    setFilteredImages(filtered);
  }, [selection]);

  return (
    <div>
      <FilterBox selection={selection} filterImages={filterImages} />
      <GalleryPhotos filteredImages={filteredImages} />
    </div>
  );
};

export default GalleryApp;
