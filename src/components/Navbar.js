import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = ({ isLoggedIn, setIsLoggedIn, navColor, currentUser }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" style={{ color: navColor }} className="logo">
          <h3>
            ClinicalTrialsCommand
            <span>Center</span>
          </h3>
        </Link>

        <ul className={`nav__links ${toggleMenu ? "show__nav" : "hide__nav"}`}>
          <li>
            <Link to="/" style={{ color: navColor }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ color: navColor }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/help" style={{ color: navColor }}>
              Help
            </Link>
          </li>

          <li>
            <Link
              className="btn btn__sm"
              to="/login"
              onClick={() => setIsLoggedIn(false)}
              style={{ color: navColor }}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </Link>
          </li>
        </ul>

        <button
          className="nav__toggle-btn"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
