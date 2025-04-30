import React, { use } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <nav className="linknav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/guestbook">GuestBook</Link>
          </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      {isMenuOpen && (
        <div className="moMenu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/guestbook">GuestBook</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
