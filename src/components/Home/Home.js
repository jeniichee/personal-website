import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 

function Home() {
    return (
        <section id="home">
            <div className="home-content">
                <h1>Jennifer Cheung</h1>
            </div>
            <div className="home-picture">
                <img className='profile-img' src={require("../../assets/Jennifer Cheung.jpg")} alt={"Jennifer Cheung"} />
            </div>
        </section>
    ); 
}; 

export default Home; 