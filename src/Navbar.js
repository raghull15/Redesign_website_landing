import React from "react";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Netflix Clone</h1>
      <div className="nav-icons">
        <FaSearch className="icon" />
        <FaBell className="icon" />
        <FaUser className="icon" />
      </div>
    </nav>
  );
}

export default Navbar;
