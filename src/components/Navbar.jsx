import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
          alt="Logo"
          className="navbar-logo"
        />
        <h2>Vite Movies</h2>
      </div>
      <div className="navbar-right">
        <a href="#" className="navbar-link">
          Movies
        </a>
        <a href="#" className="navbar-link">
          TV Shows
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
