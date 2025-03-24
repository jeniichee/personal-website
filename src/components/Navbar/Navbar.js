import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <section id="Navbar">
    <div className="nav">
      <nav>
        <ul>
          <li className="name">
            <Link to="/">Jennifer Cheung</Link>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/portfolio"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/yuki"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Yuki
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Contact Me
            </NavLink>
          </li>
          <li>
            <button>Resume</button>
          </li>
        </ul>
      </nav>
    </div>
  </section>
);

export default Navbar;