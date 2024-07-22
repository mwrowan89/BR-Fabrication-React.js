import React from "react";
import { useEffect, useState } from "react";
import "../css/TopBanner.css";

const TopBanner = () => {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`banner-container ${
        scrollDirection === "down" ? "hide" : "show"
      }`}
    >
      <div className="top-header-left">
        <h1>
          <a id="top-header-home-link" href="/">
            BR
          </a>
        </h1>
      </div>
      <div className="top-header-right">
        <h1>Search</h1>
      </div>
    </div>
  );
};

export default TopBanner;
