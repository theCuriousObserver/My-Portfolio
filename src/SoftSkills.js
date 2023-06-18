import React from 'react';
import './SoftSkills.css';

const SoftSkills = () => {
  // Replace this array with your actual soft skills
  const skills = ['Adaptability', 'Time Management', 'Communication Skills', 'Learning Desire'];

  return (
    <div className="soft-skills">
      {skills.map((skill, index) => (
        <div key={index} className="soft-skill-item">
          {skill}
        </div>
      ))}
    </div>
  );
};

export default SoftSkills;
