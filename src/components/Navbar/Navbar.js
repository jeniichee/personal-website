import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <section id="Navbar">
    <div className="nav">
      <nav>
        <ul>
          <li className="name">
            <a href="#header">Jennifer Cheung</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
);

export default Navbar;

// TODO
// follows as you scroll 
