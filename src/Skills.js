import React from 'react';
import './Skills.css';
import KeySkills from './KeySkills';
import SoftSkills from './SoftSkills';

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1 className="skills-heading">Skills</h1>
      
      <div className="skills-section">
        <h2 className="skills-subheading">Key Skills</h2>
        <KeySkills />
      </div>
      
      <div className="skills-section">
        <h2 className="skills-subheading">Soft Skills</h2>
        <SoftSkills />
      </div>
      
      {/* The rest of your Skills component */}
    </div>
  );
};

export default Skills;
