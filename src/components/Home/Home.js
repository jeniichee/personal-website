import React from "react";
import "./Home.css"; 

function Home() {
    return (
        <div className="home">
            <div className="home-content">
                <h1>Hello! Nice to meet you!</h1>
            </div>
            <div className="home-picture">
                <img className='profile-img' src={require("../../assets/Jennifer Cheung.jpg")} alt={"Jennifer Cheung"} />
            </div>
        </div>
    ); 
}; 

export default Home; 