import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <div className="nav-bar">
        <nav>
          <ul className="nav-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
