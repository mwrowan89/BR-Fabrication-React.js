import React from "react";
import { useState, useEffect } from "react";
import "../css/Header.css";

function Header() {
  const [isWindowSize, setIsWindowSize] = useState(false);

  const windowSize = () => {
    if (window.innerWidth < 500) {
      setIsWindowSize(false);
    } else {
      setIsWindowSize(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", windowSize);
    console.log(isWindowSize);
    console.log(window.innerWidth);
    windowSize();
  }, []);
  return (
    <>
      {isWindowSize === true && (
        <div className="header-container">
          <h1 id="header-title"> BR Fabrication</h1>
          <h3 id="header-desc">
            Heirloom Quality Furniture for Commercial & Residential Spaces
          </h3>
          <br />
        </div>
      )}
    </>
  );
}

export default Header;
