import React from "react";
import { useState, useEffect } from "react";
import "../css/Header.css";

function Header() {
  const [isWindowSize, setIsWindowSize] = useState(true);

  return (
    <div className="header-container">
      <h1 id="header-title"> BR Fabrication</h1>
      <h3 id="header-desc">
        Heirloom Quality Furniture for Commercial & Residential Spaces
      </h3>
      <br />
    </div>
  );
}

export default Header;
