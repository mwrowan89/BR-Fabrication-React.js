import { Link } from "react-router-dom";
import "../css/Nav.css";

export default function Nav() {
  return (
    <>
      <div>
        <nav>
          <ul className="nav-items">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
