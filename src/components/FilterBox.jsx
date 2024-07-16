import React from "react";

const FilterBox = ({ filterImages, filterByType }) => {
  return (
    <>
      <div className="com-res-btns">
        <h2 id="com-btn" onClick={() => filterImages("com")}>
          Commercial Works
        </h2>
        <h2 id="res-btn" onClick={() => filterImages("res")}>
          Residential Works
        </h2>
      </div>
      <div className="gallery-type-filter">
        <h4 id="table-btn" onClick={() => filterByType("table")}>
          Tables
        </h4>
        <h4 id="deco-btn" onClick={() => filterByType("deco")}>
          Decorations
        </h4>
      </div>
    </>
  );
};

export default FilterBox;
