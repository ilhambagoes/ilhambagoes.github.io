// File: src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const menuList = [
  { name: "Home", link: "/home" },
  { name: "Portfolio", link: "/projects" },
  { name: "Contact", link: "/contact" },
  { name: "Profile", link: "/profile" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">My Web</div>
        <button className="burger" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {menuList.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;