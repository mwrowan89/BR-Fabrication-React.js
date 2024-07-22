import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../css/TopBanner.css";

const TopBanner = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const SearchIcon = () => {
    return <FontAwesomeIcon icon={faBars} />;
  };

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
        <SearchIcon />
      </div>
    </div>
  );
};

export default TopBanner;
