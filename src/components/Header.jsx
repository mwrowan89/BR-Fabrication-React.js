import React from "react";
import { useState, useEffect } from "react";
import "../css/Header.css";
import TopBanner from "./TopBanner";

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
    windowSize();
  }, []);
  return (
    <>
      {isWindowSize && (
        <div className="header-container">
          <h1 id="header-title"> BR Fabrication</h1>
          <h3 id="header-desc">
            Heirloom Quality Furniture for Commercial & Residential Spaces
          </h3>
          <br />
        </div>
      )}
      {!isWindowSize && <TopBanner />}
    </>
  );
}

export default Header;
