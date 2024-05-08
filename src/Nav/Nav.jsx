import { Link } from "react-router-dom";


export default function Nav() {
    return (
      <>
        <div className="nav-bar">
          <nav>
            <ul>
            <li>
              <Link to={`/`}>Home</Link>
              </li>
              <li>
              <Link to={`about`}>About</Link>
              </li>
              <li>
                <Link to={'contact'}>Contact Us</Link>
              </li>
            </ul>
          </nav>
          </div>
      </>
    );
  }
