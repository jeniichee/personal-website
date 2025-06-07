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
    <section id="about">
      <section className="background">
        <h2 className="major">Fun</h2>
        <div className="background-container">
          hello!
        </div>
      </section>

      {/* <section className="interests">
        <h2 className="major">Interests</h2>
        <div className="icon-grid">
          <div className="icon-container">
            <FontAwesomeIcon icon={faLaptopCode} className="icon" />
            <h1 className="icon-title">Web Development</h1>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faMagnifyingGlassChart} className="icon" />
            <h1 className="icon-title">Data Analytics</h1>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faDna} className="icon" />
            <h1 className="icon-title">Bioinformatics</h1>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faObjectGroup} className="icon" />
            <h1 className="icon-title">UX/UI Design</h1>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faRobot} className="icon" />
            <h1 className="icon-title">Machine Learning</h1>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faHexagonNodes} className="icon" />
            <h1 className="icon-title">NLP</h1>
          </div>
        </div>
      </section> */}

      <section className="hobbies">
        <h2 className="major" style={{ color: "white", borderColor: "white" }}>
          Hobbies
        </h2>
      </section>
    </section>
  );
}

export default About;

// TODO
