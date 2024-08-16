import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/Nav.css";

export default function Nav() {
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
      <div>
        {isWindowSize && (
          <nav className="nav-bar">
            <ul className="nav-items">
              <li>
                <Link className="nav-link one" to="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/gallery">
                  GALLERY
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/designs">
                  DESIGNS
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/contact">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}
