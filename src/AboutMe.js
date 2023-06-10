import React from 'react';
import './AboutMe.css';
import StarrySky from './StarrySky';

const AboutMe = () => {
    return (
        <div className="about-me" id="about-me">
            <StarrySky />
            <div className="container">
                <h1 className="about-me-heading text-center">Know Me More</h1>
                <div className="row">
                    <div className="col-lg-8">
                        <h2 className="about-me-subheading">I'm <span className="highlight">Pallav Avatarit</span>, a Cyber Security Professional</h2>
                        <p>
                            I am a seasoned Cyber Security Specialist at Cyber Waves BV in the Netherlands. With a master's degree from the University of Birmingham, I have comprehensive expertise in data security, network configuration, OT/IT security, incident response, and threat mitigation.
                        </p>
                        <p>
                            My strong communication skills allow for effective collaboration, while my attention to detail ensures potential threats are addressed. I am adaptable, flexible, and committed to continuous learning to stay abreast of industry trends. Alongside my technical skills, I excel in time management and organization, consistently delivering exceptional customer service and tailored security solutions.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <h2>Pallav Avatarit</h2>
                        <p><a href="mailto:pallav.avatarit12@gmail.com">pallav.avatarit12@gmail.com</a></p>
                        <p><a href="https://goo.gl/maps/QiURgga8XpTRhMUH7" target="_blank" rel="noopener noreferrer">Varanasi, India</a></p>
                        <a href="my-cv.pdf" download className="cv-button">Download CV📜</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
