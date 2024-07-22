import React from "react";
import { useEffect } from "react";
import "../css/TopBanner.css";

const TopBanner = () => {
  useEffect(() => {
    const handleScroll = () => {
      const buttons = document.querySelectorAll(".banner-container");
      const scrollPosition = window.scrollY + window.innerHeight;

      buttons.forEach((button) => {
        if (scrollPosition > button.offsetTop) {
          button.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="banner-conatiner">
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
