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
  const [isWindowSize, setIsWindowSize] = useState(true);

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
      <div className="top-banner-left">
        <h1>
          <a id="top-banner-home-link" href="/">
            BR
          </a>
        </h1>
      </div>
      {isWindowSize && (
        <div className="top-banner-center">
          <h3 id="menu-link">HOME</h3>
          <h3>
            <a id="menu-link" href="/about">
              ABOUT
            </a>
          </h3>
          <h3>
            <a id="menu-link" href="/gallery">
              GALLERY
            </a>
          </h3>
          <h3>
            <a id="menu-link" href="/designs">
              DESIGNS
            </a>
          </h3>
          <h3>
            <a id="menu-link" href="/contact">
              CONTACT
            </a>
          </h3>
        </div>
      )}

      <div className="top-banner-right">
        <div onClick={toggleMenu}>
          <MenuIcon />
        </div>
        {menuVisible && (
          <div
            className={`menu ${scrollDirection === "down" ? "hide" : "show"}`}
          >
            <ul className="menu-list">
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
                <a id="menu-link" href="/desigs">
                  DESIGNS
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
