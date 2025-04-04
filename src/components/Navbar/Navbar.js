import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <section id="Navbar">
    <div className="nav">
      <nav>
        <ul>
          <li className="name">
            <a href="#home">Jennifer Cheung</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>

            <a href="#about">About</a>
          </li>
          <li>

            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#yuki">Yuki</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
);

export default Navbar;