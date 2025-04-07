import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 

function Home() {
    return (
        <section id="home">
            <div className="home-content">
                <h1>Jennifer Cheung</h1>
                <p>Hello! Welcome to my website! It is still a work in progress, and I have lots of ideas for it! Please join me on my journey as I navigate through HTML/CSS, Javascript, react, and questionable design choices! Feel free to reach out/add onto the discussion regarding any changes/additions to the website! </p>
                <div className="quick-buttons">
                    <button className="projects-btn"><Link to="/portfolio" style={{ textDecoration: 'none' }}>Projects</Link></button>
                    <button className="resume-btn">Resume</button>
                </div>
            </div>
            <div className="home-picture">
                <img className='profile-img' src={require("../../assets/Jennifer Cheung.jpg")} alt={"Jennifer Cheung"} />
            </div>
        </section>
    ); 
}; 

export default Home; 