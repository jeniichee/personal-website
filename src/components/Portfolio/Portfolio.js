import React from "react";
import "./Portfolio.css";

function Portfolio() {

  return (
    <section className="portfolio">
      <h2 className="major">Portfolio</h2>
      <div className="projects">
        <div className="card" > 
          <div className="card-front">
            This is the front of the card.
            <div className="card-back">
              This is the back of the card. 
            </div>
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
