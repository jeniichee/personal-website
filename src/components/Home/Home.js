import { React, useState, useEffect } from "react";
import ReactMarkedDown from "react-markdown";
import "./Home.css";

const Home = () => {
  const [text, setText] = useState("");
  const [currIndex, setCurrIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const texts = [
      "Class of 2025",
      "I studied CS, Neuro, and dabbled in Stats",
      "Live, laugh, love matcha",
      "Delulu is the solulu",
    ];

    const currentText = texts[currIndex];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(currentText.substring(0, text.length - 1));
        setSpeed(50);

        if (text === "") {
          setIsDeleting(false);
          setCurrIndex((prev) => (prev + 1) % texts.length);
          setSpeed(150);
        }
      } else {
        setText(currentText.substring(0, text.length + 1));

        if (text === currentText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, currIndex, isDeleting, speed]);

  return (
    <section id="home">
      <div className="home-content">
        <div className="home-heading">
          <span>
            Hello! My name is Jen. Welcome to my tiny, cozy corner of the
            internet 🪴
          </span>
        </div>
        <div className="home-blurb">
          <span>{text}|</span>
        </div>
      </div>
      <div className="home-right">
        <div className="polaroid">
          <img
            src={require("../../assets/jen_bw.jpg")}
            alt={"Taken at a company party! Did some photoshop magic..."}
          />
          <span className="caption">
            <span>This is me!</span>
            <span className="hidden-caption">
              ✨I am currently unemployed✨
            </span>
          </span>
        </div>

        <div className="me-caption">
          <h2 className="major">Note</h2>
          <span className="me">
            <ReactMarkedDown>
              Wearing the winged sandals of Hermes, I embody the "jack of all
              trades" spirit with a dash of playful energy: **fullstack/frontend
              engineer**, **data engineer**, and a lover of **pretty things**!
            </ReactMarkedDown>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;
