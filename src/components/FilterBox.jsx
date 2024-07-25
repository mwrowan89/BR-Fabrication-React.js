import React, { useState } from "react";

const FilterBox = ({ filterImages }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (type) => {
    setActiveDropdown((prev) => (prev === type ? null : type));
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
          <li>Restaurant Tables</li>
          <li>Restaurant Decoration</li>
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
          <li>Dining Tables</li>
          <li>Coffee Tables</li>
          <li>Desks</li>
          <li>Storage</li>
          <li>Decoration</li>
          <li>Drips</li>
          <li>Bedroom</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterBox;
