import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="major">Projects</h2>
      <div className="projects" style={{ paddingTop: "30px" }}>
        {/* Personal Website */}
        <div className="card">
          <span className="front">
            <span className="front-title">My Portfolio</span>
            <span>Personal Project</span>
          </span>
          <span className="back">
            This website! Coded using React, HTML, CSS, and JavaScript. I've
            integrated a few design choices I've learned from Fundamentals of
            Software Engineering, and I'm hoping to add more features in the
            near future. Still have soo many more ideas to try for this project!
          </span>
        </div>

        {/* Fake Stack OverFlow */}
        <div className="card">
          <span className="front">
            <span className="front-title">AnswerHub</span>
            <span>Academic Case Study</span>
          </span>
          <span className="back">
    
          </span>
        </div>

        {/* NLP Text Classification */}
        <div className="card">
          <span className="front">
            <span className="front-title">NLP Text Classification</span>
            <span>Academic Case Study</span>
          </span>
          <span className="back"></span>
        </div>

        {/* Drug Consumption Project */}
        <div className="card">
          <span className="front">
            <span className="front-title">Drug Consumption</span>
            <span>Academic Case Study</span>
          </span>
          <span className="back"></span>
        </div>

        {/* 2048 AI */}
        <div className="card">
          <span className="front">
            <span className="front-title">2048 AI</span>
            <span>Academic Case Study</span>
          </span>
          <span className="back"></span>
        </div>

        <div className="card">
          <span className="front">
            <span className="front-title">Attendance Manager System</span>
            <span>Personal Project</span>
          </span>
          <span className="back">Still in works!</span>
        </div>

        <div className="card">
          <span className="front">
            <span className="front-title">Maze</span>
            <span>Personal Project</span>
          </span>
          <span className="back">Still in works!</span>
        </div>

        <div className="card">
          <span className="front">
            <span className="front-title">Bullet Journal</span>
            <span>Personal Project</span>
          </span>
          <span className="back">Still in works!</span>
        </div>

        <div className="card">
          <span className="front">
            <span className="front-title">BattleSalvo</span>
            <span>Personal Project</span>
          </span>
          <span className="back">Still in works!</span>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
