// import { React, useState } from "react";
// import Popup from "../Popup/Popup";

import "./Portfolio.css";

const Portfolio = () => {
  // const [showPopup, setShowPopup] = useState(false);
  // const [popupMessage, setPopupMessage] = useState("");

  const projects = [
    {
      id: 0,
      title: "My Portfolio",
      type: "Personal Project",
      summary:
        "This website! Coded using React, HTML, CSS, and JavaScript. I've integrated a few " + 
        "design choices I've learned from Fundamentals of Software Engineering, "+
        "and I'm hoping to add more features in the near future. Still have soo many more ideas to try for this project!",
    },
    {
      id: 7,
      title: "Algorithm Aversion Experiment Platform",
      type: "Queen's University",
      summary:
        "This study examines how people use advice from four different sources - another human, an algorithm or two forms of hybrid intelligence "+
        "(algorithm scrutinised by a human or mean of algorithm and human).",
      description: "hello this is portfolio. ",
    },
    {
      id: 4,
      title: "Attendance Manager System",
      type: "Student Government Association (SGA)",
      summary:
        "Collaborated on streamlining the attendance system at SGA, allowing admins to track membership in the Student Senate, record attendance at meetings, "+
        "receive and track attendance changes, and process unexcused absences and removals from the roster. Some other features include sending bulk emails; "+
        "blocking members from signing in; conducting roll-call votes; and creating member pairings. "+
        "I was first recruited as a backend engineer, before I uptook the role of project lead and facilitated the project completion.",
      description: "hello this is portfolio. ",
    },
    {
      id: 1,
      title: "AnswerHub",
      type: "Academic Case Study",
      summary:
        "Final project for CS4530 (Fundamentals of Software Engineering)! We were tasked to develop an enhanced version of Stack "+
        "Overflow in a team of 3. Our group focused on accessibility, real-time chat, and authentication, where I uptoke responsibility for Frontend and accessbility. "+
        "Key accessibility features include customizable display options (high-contrast modes, adjustable font sizes) for users with visual impairments. "+
        "Agile methodologies were followed and SDLC was in-practice.",
    },
    {
      id: 8,
      title: "Text Message Classification",
      type: "Academic Case Study",
      summary:
        "Explored NLP-based preventative measures to assist older adults in identifying scam text messages. ",
      description: "hello this is portfolio. ",
    },
    {
      id: 2,
      title: "Predictive Factors of Drug Consumption",
      type: "Academic Research",
      summary:
        "Explored the intricate relationships between drug use frequencies, personality factors (based on the Five Factor Model), "+
        "impulsivity (assessed by BIS-11), sensation seeking habits (measured through ImpSS), and personal demographics! "+
        "Developed 3 machine learning models in Python, individually trained on dataset of 1885 individuals (UCI Machine Learning Repository). "+
        "Conducted data preprocessing and exploration in Jupyter Lab, and visualization tools aided in understanding the distribution and "+
        "patterns within the dataset.", 
      description: "hello this is portfolio. ",
    },
    {
      id: 3,
      title: "2048 AI",
      type: "Academic Case Study",
      summary:
        "A pair-developed program in Python that can autonomously solve the classic game of 2048, while accounting for the game's stochastic tile generation. "+
        "A fun (and arduous) demonstration of a mix between one of our favorite puzzle games and an implementation of Expectimax algorithm. "+
        "Designed a heuristic-driven evaluation function and reduced computation time by >50% via state pruning, code optimization, and streamlining loop structures. "+
        "Successfully forms the 2048 tile under 12 minutes, achieves high scores (e.g., 14,988 points), and consistently forms 1024 tiles. ",
      description: "hello this is portfolio. ",
    },
    {
      id: 6,
      title: "BattleSalvo",
      type: "Academic Case Study",
      summary:
        "Command-line rendition in Java of the classic game Battleship! The game supports both a single-player mode against an AI opponent, and a multiplayer mode using sockets for communication. "+
        "Client to server communication protocol implements JSON encoding. "+
        "Project structure adheres to the Model-View-Controller (MVC) design pattern, and incorporates SOLID priniciples for clean and maintainable code. "+
        "A 90% Jacoco test coverage was secured.",
      description: "hello this is portfolio. ",
    },
    {
      id: 5,
      title: "Maze",
      type: "Academic Case Study",
      summary:
        "One of my first big CS projects in Java! Upon playing, users can see the maze being randomly generated (using Kruskal's algorithm) "+
        "based on selected grid size, before choosing whether to solve the maze with "+
        "Breadth-First Search (BFS) or Depth-First Search (DFS) and see the algorithm in action (visited cells and solution path). "+
        "Very object-oriented design choices: interfaces (ICell), classes for cells, edges, the world, and tests, "+
        "randomness for edge weights, and impworld for visualization.",
      description: "hello this is portfolio. ",
    },
  ];

  // const handlePopup = (projectId) => {
  //   setShowPopup(true);
  //   const project = projects.find((p) => p.id === projectId);
  //   setPopupMessage(project.description);
  // };

  // const handlePopupClose = () => {
  //   setShowPopup(false);
  // };

  return (
    <section id="portfolio">
      <h2 className="major">Projects</h2>
      <div className="projects" style={{ paddingTop: "30px" }}>
        {/* Personal Website */}
        {projects.map((project) => (
          // <div
          //   key={project.id}
          //   className="card"
          //   onClick={() => handlePopup(project.id)}
          // >
          <div key={project.id} className="card">
            <span className="front">
              <span className="project-title">{project.title}</span>
              <span className="project-type">{project.type}</span>
            </span>
            <span className="back">{project.summary}</span>
          </div>
        ))}
      </div>
      {/* {showPopup && <Popup message={popupMessage} onClose={handlePopupClose} />} */}
    </section>
  );
};

export default Portfolio;
