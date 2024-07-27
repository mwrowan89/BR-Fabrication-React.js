import React, { useState } from "react";

const FilterBox = ({ filterImages }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (type) => {
    setActiveDropdown((prev) => (prev === type ? null : type));
  };

  const updateImages = (newSelection) => {
    filterImages(newSelection);
  };

  return (
    <div className="gallery-type-filter">
      <div
        className={`dropdown ${activeDropdown === "com" ? "active" : ""}`}
        onClick={() => handleDropdownToggle("com")}
      >
        {/* Commercial Section */}

        <h4 id="gallery-filter-title">Commercial Works</h4>
        <ul
          className={`dropdown-list ${activeDropdown === "com" ? "show" : ""}`}
        >
          <li id="gallery-dropdown-item" onClick={() => updateImages("com")}>
            All
          </li>
          <li
            id="gallery-dropdown-item"
            onClick={() => updateImages("com-table")}
          >
            Restaurant Tables
          </li>
          <li
            id="gallery-dropdown-item"
            onClick={() => updateImages("com-deco")}
          >
            Restaurant Decoration
          </li>
        </ul>
      </div>
      <div
        className={`dropdown ${activeDropdown === "res" ? "active" : ""}`}
        onClick={() => handleDropdownToggle("res")}
      >
        {/* Residential Section */}

        <h4 id="gallery-filter-title">Residential Works</h4>
        <ul
          className={`dropdown-list ${activeDropdown === "res" ? "show" : ""}`}
        >
          <li id="gallery-dropdown-item" onClick={() => updateImages("res")}>
            All
          </li>
          <li
            id="gallery-dropdown-item"
            onClick={() => updateImages("res-bed")}
          >
            Bedroom
          </li>
          <li
            id="gallery-dropdown-item"
            onClick={() => updateImages("cabinetry")}
          >
            Cabinetry
          </li>
          <li
            id="gallery-dropdown-item"
            onClick={() => updateImages("res-coffee-table")}
          >
            Coffee Tables
          </li>
          <li
            id="gallery-dropdown-item"
            onClick={() => updateImages("res-deco")}
          >
            Decoration
          </li>
          <li
            id="gallery-dropdown-item"
            onClick={() => updateImages("res-desk")}
          >
            Desks
          </li>
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
