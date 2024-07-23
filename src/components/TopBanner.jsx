import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../css/TopBanner.css";

const TopBanner = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const MenuIcon = () => {
    return <FontAwesomeIcon icon={faBars} />;
  };
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
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
      <div className="top-header-center">
        <h3>HOME</h3>
        <h3>ABOUT</h3>
        <h3>GALLERY</h3>
        <h3>CONTACT US</h3>
      </div>
      <div className="top-header-right">
        <div onClick={toggleMenu}>
          <MenuIcon />
        </div>
        {menuVisible && (
          <div
            className={`menu ${scrollDirection === "down" ? "hide" : "show"}`}
          >
            <ul>
              <li>
                <a id="menu-link" href="/">
                  HOME
                </a>
              </li>
              <li>
                <a id="menu-link" href="/about">
                  ABOUT
                </a>
              </li>
              <li>
                <a id="menu-link" href="/gallery">
                  GALLERY
                </a>
              </li>
              <li>
                <a id="menu-link" href="/contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBanner;
