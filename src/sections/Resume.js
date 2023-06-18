// Resume.js
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume" id="resume">
      <div className="resume-container">
        <h1 className="resume-heading">Resume</h1>
        <div className="timeline">
          <div className="timeline-column">
            <h2 className="timeline-heading">Education</h2>
            {/* Add your education timeline elements here */}
            <div className="timeline-element">
              <h3 className="timeline-element-title">Master of Science, Cyber Security</h3>
              <h4 className="timeline-element-subtitle">University of Birmingham, Birmingham, United Kingdom</h4>
              <p className="timeline-element-date">September 2021 - September 2022</p>
            </div>
            <div className="timeline-element">
              <h3 className="timeline-element-title">Bachelor of Technology, Information Technology</h3>
              <h4 className="timeline-element-subtitle">Kalinga Institute of Industrial Technology, Bhubaneswar, Odisha</h4>
              <p className="timeline-element-date">August 2017 - May 2021</p>
            </div>
          </div>
          <div className="timeline-column">
            <h2 className="timeline-heading">Experience</h2>
            {/* Add your experience timeline elements here */}
            <div className="timeline-element">
              <h3 className="timeline-element-title">Cyber Security Project Manager</h3>
              <h4 className="timeline-element-subtitle">Cyber Waves BV, Amsterdam, Netherlands</h4>
              <p className="timeline-element-date">February 2023 - Present</p>
            </div>
            <div className="timeline-element">
              <h3 className="timeline-element-title">Sales & Marketing Intern</h3>
              <h4 className="timeline-element-subtitle">HighRadius, Hyderabad, India</h4>
              <p className="timeline-element-date">April 2020 - July 2020</p>
            </div>
            <div className="timeline-element">
              <h3 className="timeline-element-title">WordPress Developer Intern</h3>
              <h4 className="timeline-element-subtitle">R&C Estate, Cairo, Egypt</h4>
              <p className="timeline-element-date">December 2019 - January 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
