import React from "react";
import { GrLinkNext } from "react-icons/gr";
import "./Portfolio.css";

function Portfolio() {

  return (
    <section className="portfolio">
      <h2 className="major">Portfolio</h2>
      <div className="projects">
        <div className="card" >
          <div className="card-image">
            <div className="icon"> <GrLinkNext /> </div>
          </div>
          <div className="text">
            Attendance Manager
          </div>
          <div className="description">
            checks who is here and who isnt here
          </div>
        </div>

        <div className="card" >
          <div className="card-image">
            <div className="icon"> <GrLinkNext /> </div>
          </div>
          <div className="text">
            Battle Ship 
          </div>
          <div className="description">
            java-renedition of battle ship 
          </div>
        </div>


        <div className="card" >
          <div className="card-image">
            <div className="icon"> <GrLinkNext /> </div>
          </div>
          <div className="text">
            NLP-based Text Clssification 
          </div>
          <div className="description">
            two-stage pipeline to categorize text 
          </div>
        </div>


        <div className="card" >
          <div className="card-image">
            <div className="icon"> <GrLinkNext /> </div>
          </div>
          <div className="text">
            Bullet Journel 
          </div>
          <div className="description">
            Uses JavaFX 
          </div>
        </div>


        <div className="card" >
          <div className="card-image">
            <div className="icon"> <GrLinkNext /> </div>
          </div>
          <div className="text">
            2048 AI 
          </div>
          <div className="description">
            Classic game of 2048 with self-learning program. 
          </div>
        </div>


        <div className="card" >
          <div className="card-image">
            <div className="icon"> <GrLinkNext /> </div>
          </div>
          <div className="text">
            Stack Overflow 
          </div>
          <div className="description">
            website
          </div>
        </div>


        <div className="card" >
          <div className="card-image">
            <div className="icon"> <GrLinkNext /> </div>
          </div>
          <div className="text">
            Notetaker/Study
          </div>
          <div className="description">
            checks who is here and who isnt here
          </div>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;

// TODO
// click on each project to learn more about the project/takeaways/blog+code snippets
// // takes u to a different page
// have a small section to request full code
// project cards 
