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
import text from "../../assets/about-background.js"; 

import "./About.css";

function About() {
 
  return (
    <div className="about">
      <section className="background">
        <h2 className="major">Background</h2>
        <div className="background-container">
          <p className="background-content">{text}</p>
          <img
            className="background-img"
            src={require("../../assets/Jennifer Cheung.jpg")}
            alt={"Jennifer Cheung"}
          />
        </div>
      </section>

      <section className="interests">
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
      </section>

      <section className="hobbies">
        <h2 className="major" style={{ color: "white", borderColor: "white" }}>
          Hobbies
        </h2>
      </section>
    </div>
  );
}

export default About;

// TODO
