import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faMagnifyingGlassChart,
  faDna,
  faObjectGroup,
  faRobot,
  faHexagonNodes,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h2 className="major">Background</h2>
      <section className="background"></section>

      <h2 className="major">Interests</h2>
      <section className="interests">
        <div className="icon-grid">
          <div className="icon-container">
            <FontAwesomeIcon icon={faLaptopCode} className="icon" />
            <span className="icon-title">Web Development</span>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faMagnifyingGlassChart} className="icon" />
            <span className="icon-title">Data Analytics</span>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faDna} className="icon" />
            <span className="icon-title">Bioinformatics</span>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faObjectGroup} className="icon" />
            <span className="icon-title">UX/UI Design</span>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faRobot} className="icon" />
            <span className="icon-title">Machine Learning</span>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faHexagonNodes} className="icon" />
            <span className="icon-title">Natural Language Processing</span>
          </div>
        </div>
      </section>

      <h2 className="major">Hobbies</h2>
      <section className="hobbies"></section>
    </div>
  );
}

export default About;

// TODO
