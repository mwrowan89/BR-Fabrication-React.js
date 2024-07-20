import React from "react";

const FilterBox = ({ selection, filterImages, filterByType }) => {
  return (
    <>
      <div className="options-list">
        <h3>Filter Gallery: </h3>
        <select
          id="select-options"
          value={selection}
          onChange={(e) => filterImages(e.target.value)}
        >
          <option value="all">All</option>
          <option value="com">Commercial</option>
          <option value="res">Residential</option>
          <option value="table">Tables</option>
          <option value="deco">Decorations</option>
        </select>
      </div>
      {/* <div className="com-res-btns">
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
      </div> */}
    </>
  );
};

export default FilterBox;
