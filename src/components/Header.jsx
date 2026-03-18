import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img
              src="/legacy/school_logo.jpeg"
              alt="Krelis Legacy College Logo"
              className="logo-image"
            />
            <div className="logo-text">
              <h2>KRELIS LEGACY COLLEGE</h2>
              <p className="tagline">Nurturing Minds, Shaping Futures</p>
            </div>
          </div>
          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#programs">Programs</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#admissions">Admissions</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li className="portal-dropdown">
              <a href="#">
                Portals <i className="fas fa-chevron-down"></i>
              </a>
              <div className="dropdown-menu">
                <Link to="/login/student">
                  <i className="fas fa-graduation-cap"></i> Student Portal
                </Link>
                <Link to="/login/teacher">
                  <i className="fas fa-chalkboard-teacher"></i> Teacher Portal
                </Link>
                <Link to="/login/principal">
                  <i className="fas fa-user-tie"></i> Principal Portal
                </Link>
                <Link to="/login/admin">
                  <i className="fas fa-user-shield"></i> Admin Portal
                </Link>
              </div>
            </li>
          </ul>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
