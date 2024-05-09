import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <div>
        <nav>
          <ul className="nav-items">
            <li>
              <Link className="nav-link" to="/">Home</Link> &nbsp;
            </li>
            <li>
              <Link className="nav-link" to="/about">About</Link> &nbsp;
            </li>
            <li>
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
