import { React, useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [text, setText] = useState("");
  const [currIndex, setCurrIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const texts = [
      "Class of 2025",
      "I studied CS, Neuroscience, and dabbled in Stats ",
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
          <span>Hello! My name is Jen.</span>
        </div>
        <div className="home-blurb">
          <span>{text}|</span>
        </div>
      </div>
      <div className="polaroid">
        <img
          src={require("../../assets/jen_bw.jpg")}
          alt={"Jennifer Cheung"}
        />
        <span className="caption">
        I am currently unemployed.
          Hello
          wil u go to next line
        </span>
      </div>
    </section>
  );
};

export default Home;
