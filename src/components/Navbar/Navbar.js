import React from "react";
import "./Navbar.css";
import resume from "../../Jennifer Cheung Resume.pdf"; 

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

            <a href="#portfolio">Work</a>
          </li>
          <li>

            <a href="#about">Fun</a>
          </li>
          {/* <li>
            <a href="#yuki">Yuki</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href={resume} download="Please Hire Me.pdf">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
);

export default Navbar;