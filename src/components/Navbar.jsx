// File: src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";

const menuList = [
    { name: "Home", link: "#home" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Todo App", link: "#todo" },
    { name: "Profile", link: "#profile" },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">My Web</div>
      <ul className="nav-links">
        {menuList.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;