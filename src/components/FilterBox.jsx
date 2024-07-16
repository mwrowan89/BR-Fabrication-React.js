import React from "react";
import { useState, useEffect } from "react";
import imageData from "./ImageData";

const FilterBox = () => {
  const [type, setType] = useState("all");
  const [selection, setSelection] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  const filterImages = (newSelection) => {
    let filtered = [];
    if (newSelection === "all") {
      filtered = imageData;
    } else if (newSelection === "com") {
      filtered = imageData.filter((image) => image.customer === "com");
    } else if (newSelection === "res") {
      filtered = imageData.filter((image) => image.customer === "res");
    }
    setFilteredImages(filtered);
  };

  const filterByType = (typeSelection) => {
    let filtered = [];
    if (typeSelection === "all") {
      filtered = imageData;
    } else if (typeSelection === "tables") {
      filtered = imageData.filter((image) => image.type === "table");
    } else if (typeSelection === "deco") {
      filtered = imageData.filter((image) => image.type === "deco");
    }
    setFilteredImages(filtered);
  };

  useEffect(() => {
    filterImages(selection);
    filterByType(type);
    // setPage(1);
    // eslint-disable-next-line
  }, [selection]);

  return (
    <>
      <div className="com-res-btns">
        <h2 id="com-btn" onClick={() => setSelection("com")}>
          Commercial Works
        </h2>
        <h2 id="res-btn" onClick={() => setSelection("res")}>
          Residential Works
        </h2>{" "}
      </div>
      <div className="gallery-type-filter">
        <h4 id="table-btn" onClick={() => setType("tables")}>
          Tables
        </h4>
        <h4 id="deco-btn" onClick={() => setType("deco")}>
          Decorations
        </h4>
      </div>
    </>
  );
};

export default FilterBox;
