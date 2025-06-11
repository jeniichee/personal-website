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
        "This website! Coded using React, HTML, CSS, and JavaScript. I've integrated a few web dev choices I've learned from Fundamentals of Software Engineering, and I'm hoping to add more features in the near future. Still have soo many more ideas to try for this project!",
    },
    {
      id: 1,
      title: "AnswerHub",
      type: "Academic Case Study",
      summary:
        "Final project for Fundamentals of Software Engineering! We were tasked to develop an enhanced version of Stack Overflow in a team of 3. Our group focused on accessibility, real-time chat, and authentication. Agile methodologies were followed and SDLC was in-practice.",
    },
    {
      id: 2,
      title: "Drug Consumption",
      type: "Academic Case Study",
      summary:
        "This website! Coded using React, HTML, CSS, and JavaScript. I've integrated a few web dev choices I've learned from Fundamentals of Software Engineering, and I'm hoping to add more features in the near future. Still have soo many more ideas to try for this project!",
      description: "hello this is portfolio. ",
    },
    {
      id: 3,
      title: "2048 AI",
      type: "Academic Case Study",
      summary:
        "This website! Coded using React, HTML, CSS, and JavaScript. I've integrated a few web dev choices I've learned from Fundamentals of Software Engineering, and I'm hoping to add more features in the near future. Still have soo many more ideas to try for this project!",
      description: "hello this is portfolio. ",
    },
    {
      id: 4,
      title: "Attendance Manager System",
      type: "Professional",
      summary:
        "This website! Coded using React, HTML, CSS, and JavaScript. I've integrated a few web dev choices I've learned from Fundamentals of Software Engineering, and I'm hoping to add more features in the near future. Still have soo many more ideas to try for this project!",
      description: "hello this is portfolio. ",
    },
    {
      id: 5,
      title: "Maze",
      type: "Academic Case Study",
      summary:
        "This website! Coded using React, HTML, CSS, and JavaScript. I've integrated a few web dev choices I've learned from Fundamentals of Software Engineering, and I'm hoping to add more features in the near future. Still have soo many more ideas to try for this project!",
      description: "hello this is portfolio. ",
    },
    {
      id: 6,
      title: "BattleSalvo",
      type: "Academic Case Study",
      summary:
        "This website! Coded using React, HTML, CSS, and JavaScript. I've integrated a few web dev choices I've learned from Fundamentals of Software Engineering, and I'm hoping to add more features in the near future. Still have soo many more ideas to try for this project!",
      description: "hello this is portfolio. ",
    },
    {
      id: 7,
      title: "Algorithm Aversion Experiment Platform",
      type: "Professional",
      summary:
        "This website! Coded using React, HTML, CSS, and JavaScript. I've integrated a few web dev choices I've learned from Fundamentals of Software Engineering, and I'm hoping to add more features in the near future. Still have soo many more ideas to try for this project!",
      description: "hello this is portfolio. ",
    },
    {
      id: 8,
      title: "",
      type: "Personal Project",
      summary:
        "This website! Coded using React, HTML, CSS, and JavaScript. I've integrated a few web dev choices I've learned from Fundamentals of Software Engineering, and I'm hoping to add more features in the near future. Still have soo many more ideas to try for this project!",
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
