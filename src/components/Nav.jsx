import { Link } from "react-router-dom";
import "../css/Nav.css";

export default function Nav() {
  return (
    <>
      <div>
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
      </div>
    </>
  );
}
