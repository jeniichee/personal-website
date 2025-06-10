import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="major">Projects</h2>
      <div className="projects" style={{ paddingTop: "30px" }}>
        {/* Personal Website */}
        <div className="card">
          <img
            src={require("../../assets/Jennifer Cheung.jpg")}
            alt={"Jennifer Cheung"}
          />
          <span className="description">
            <span className="top">My Portfolio</span>
            <span className="bottom">Personal Project</span>
          </span>
        </div>

        {/* Fake Stack OverFlow */}
        <div className="card">
          <span className="description">
            <span className="top">My Portfolio</span>
            <span className="bottom">Personal Project</span>
          </span>
        </div>

        {/* NLP Text Classification */}
        <div className="card">
          <span className="description">
            <span className="top">My Portfolio</span>
            <span className="bottom">Personal Project</span>
          </span>
        </div>

        {/* Drug Consumption Project */}
        <div className="card">
          <span className="description">
            <span className="top">My Portfolio</span>
            <span className="bottom">Personal Project</span>
          </span>
        </div>

        {/* Research Platform */}
        <div className="card">
          <span className="description">
            <span className="top">My Portfolio</span>
            <span className="bottom">Personal Project</span>
          </span>
        </div>

        {/* Attendance Manager System */}
        <div className="card">
          <span className="description">
            <span className="top">My Portfolio</span>
            <span className="bottom">Personal Project</span>
          </span>
        </div>

        {/* 2048 AI*/}
        <div className="card">
          <span className="description">
            <span className="top">My Portfolio</span>
            <span className="bottom">Personal Project</span>
          </span>
        </div>

        {/* Maze */}
        <div className="card">
          <span className="description">
            <span className="top">My Portfolio</span>
            <span className="bottom">Personal Project</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
