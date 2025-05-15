import React from "react";
import "./Navbar.css";

function Navbar({ setActivePage }) {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src="https://cdn-icons-png.flaticon.com/512/415/415733.png" alt="logo" />

        <span>CoffeeTime</span>
      </div>
      <ul className="nav-links">
        <li onClick={() => setActivePage("home")}>Home</li>
        <li onClick={() => setActivePage("about")}>About</li>
        <li onClick={() => setActivePage("services")}>Services</li>
        <li onClick={() => setActivePage("history")}>History</li>
        <li onClick={() => setActivePage("api")}>Api</li>
        <li onClick={() => setActivePage("contact")}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
