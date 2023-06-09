import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-me" id="about-me">
            <div className="about-me-content">
                <h1 className="about-me-heading">Know Me More</h1>
                <div className="about-me-text">
                    <h2 className="about-me-subheading">I am <span className="highlight">Pallav Avatarit</span>, a Cyber Security Professional</h2>
                    <p>
                        I am a seasoned Cyber Security Specialist at Cyber Waves BV in the Netherlands. With a master's degree from the University of Birmingham, I have comprehensive expertise in data security, network configuration, OT/IT security, incident response, and threat mitigation. My strong communication skills allow for effective collaboration, while my attention to detail ensures potential threats are addressed. I am adaptable, flexible, and committed to continuous learning to stay abreast of industry trends. Alongside my technical skills, I excel in time management and organization, consistently delivering exceptional customer service and tailored security solutions.
                    </p>
                </div>
                <div className="about-me-details">
                    <h2>Pallav Avatarit</h2>
                    <p><a href="mailto:your-email@example.com">your-email@example.com</a></p>
                    <p>Your Location</p>
                    <a href="my-cv.pdf" download className="cv-button">Download My CV</a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
