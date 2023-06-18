import React from 'react';
import profileImage from './my-image.jpg';
import linkedinIcon from './linkedin.svg';
import githubIcon from './github.svg';
import tryhackmeIcon from './tryhackme.svg';
import './Sidebar.css';

const Sidebar = () => {
 return (
  <div className="sidebar">
   <div className="profile">
    <img src={profileImage} alt="Pallav Avatarit" />
    <h1>Pallav Avatarit</h1>
   </div>
   <nav>
    <ul>
     <li><a href="#home">Home</a></li>
     <li><a href="#about-me">About Me</a></li>
     <li><a href="#resume">Resume</a></li>
     <li><a href="#skills">Skills</a></li>
     <li><a href="#contact-me">Contact Me</a></li>
    </ul>
   </nav>
   <div className="social-icons">
    <a href="https://www.linkedin.com/in/pallav-avatarit" target="_blank" rel="noreferrer">
     <img src={linkedinIcon} alt="LinkedIn" />
    </a>
    <a href="https://github.com/theCuriousObserver" target="_blank" rel="noreferrer">
     <img src={githubIcon} alt="GitHub" />
    </a>
    <a href="https://tryhackme.com/p/pallav.avatarit" target="_blank" rel="noreferrer">
     <img src={tryhackmeIcon} alt="TryHackMe" />
    </a>
   </div>
  </div>
 );
};

export default Sidebar;
