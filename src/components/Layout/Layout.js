import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import resume from "../../assets/Jennifer Cheung Resume.pdf";

const Layout = () => {
  const [prevPos, setPrevPos] = useState(0);

  const handleNav = () => {
    const currPos = window.scrollY;

    if (currPos > prevPos) {
      document.getElementById("Navbar").style.display = "none";
    } else {
      document.getElementById("Navbar").style.display = "block";
    }

    setPrevPos(currPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNav);

    return () => window.removeEventListener("scroll", handleNav);
  });

  return (
    <section id="Navbar">
      <div className="nav">
        <nav>
          <ul>
            <li className="name">
              <a href="#home">Jennifer Cheung</a>
            </li>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <a href="#portfolio">Work</a>
            </li>

            <li>
              <Link to="/about">Fun</Link>
            </li>

            <li>
              <Link to="/yuki">Yuki</Link>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

            <li>
              <a href={resume}>Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Layout;
