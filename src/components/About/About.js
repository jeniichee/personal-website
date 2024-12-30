import React, { useState, useEffect } from "react";
import javaBio from "../../assets/javaBio.txt";
import "./About.css";

const About = () => {
  const [bioText, setBioText] = useState();

  useEffect(() => {
    fetch(javaBio)
      .then((response) => response.text())
      .then((text) => {
        setBioText(text);
      });
  }, []);

  return (
    <section id="about">
      <h2 className="major">About</h2>
      <div className="bio-container">
        <div className="bio-content">
          <p>{bioText}</p>
        </div>
        <div className="about-img">bye</div>
      </div>
    </section>
  );
};

export default About;

// TODO
// different types of views (java, python, resume)
// make resume downloadable
