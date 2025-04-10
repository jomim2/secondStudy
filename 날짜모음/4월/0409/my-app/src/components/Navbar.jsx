import React from "react";
import { Link } from "react-router-dom"; // a 태그랑 비슷한 기능 css 할때는 a태그로 잡고 한다.
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/scrollText">ScrollHere</Link>
      <Link to="/GuestBook">GuestBook</Link>
    </nav>
  );
};
export default Navbar;
