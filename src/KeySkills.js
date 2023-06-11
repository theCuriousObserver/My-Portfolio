import React from 'react';
import './KeySkills.css';

const KeySkills = () => {
  // Replace this array with your actual skills
  const skills = [ 'Penetration Testing', 'Incident Response', 'Web Application Security', 'Network Security', 'Email Security', 'Vulnerability and Threat Management', 'Digital Forensics'];

  return (
    <div className="key-skills">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          {skill}
        </div>
      ))}
    </div>
  );
};

export default KeySkills;
