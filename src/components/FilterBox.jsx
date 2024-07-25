import React, { useState } from "react";

const FilterBox = ({ filterImages }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (type) => {
    setActiveDropdown((prev) => (prev === type ? null : type));
  };

  const updateImages = (newSelection) => {
    filterImages(newSelection);
    console.log(newSelection);
  };

  return (
    <div className="gallery-type-filter">
      <div
        className={`dropdown ${activeDropdown === "com" ? "active" : ""}`}
        onClick={() => handleDropdownToggle("com")}
      >
        <h4>Commercial Works</h4>
        <ul
          className={`dropdown-list ${activeDropdown === "com" ? "show" : ""}`}
        >
          <li id="gallery-dropdown-item">Restaurant Tables</li>
          <li id="gallery-dropdown-item">Restaurant Decoration</li>
        </ul>
      </div>
      <div
        className={`dropdown ${activeDropdown === "res" ? "active" : ""}`}
        onClick={() => handleDropdownToggle("res")}
      >
        <h4>Residential Works</h4>
        <ul
          className={`dropdown-list ${activeDropdown === "res" ? "show" : ""}`}
        >
          <li id="gallery-dropdown-item">Bedroom</li>
          <li id="gallery-dropdown-item">Cabinetry</li>
          <li id="gallery-dropdown-item">Coffee Tables</li>
          <li
            id="gallery-dropdown-item"
            onClick={() => updateImages("res-deco")}
          >
            Decoration
          </li>
          <li id="gallery-dropdown-item">Desks</li>
          <li
            id="gallery-dropdown-item"
            onClick={() => updateImages("res-table")}
          >
            Dining Tables
          </li>
          <li id="gallery-dropdown-item">Drips</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterBox;
