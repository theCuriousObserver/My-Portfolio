import React from 'react';
import './Home.css';
import astronautImage from './astronaut-skateboarding-in-space.jpg';
import downArrowImage from './down-arrow.png'; // Replace with the actual path to your down arrow image

const Home = () => {
    return (
        <div className="home" id="home">
            <div className="home-content">
                {/* Welcome Box */}
                <div className="welcome-box">
                    Welcome to my Portfolio
                </div>
                {/* Main Heading */}
                <h1>Hi! I am Pallav Avatarit</h1>
                {/* Subheading */}
                <h2 className="subheading">Cyber Security Professional working at Cyber Waves BV, Amsterdam</h2>
                {/* Download CV Button */}
                <a href="my-cv.pdf" download className="cv-button">Download My CV</a>
                {/* Down Arrow */}
                <a href="#about-me">
                    <img src={downArrowImage} alt="Down Arrow" className="down-arrow" />
                </a>
            </div>
            {/* Moving Image */}
            <div className="home-image">
                <img src={astronautImage} alt="Astronaut Skateboarding in Space" />
            </div>
        </div>
    );
};

export default Home;
