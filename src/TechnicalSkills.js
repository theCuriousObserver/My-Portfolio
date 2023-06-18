import React from 'react';
import './TechnicalSkills.css';

const TechnicalSkills = () => {
  // Replace this array with your actual technical skills
  const skills = [
    {
      category: 'Security Tools',
      items: ['Wireshark', 'Metasploit', 'Burp Suite', 'Nmap', 'IDA Pro']
    },
    {
      category: 'Languages',
      items: ['C/C++', 'Python', 'Java', 'PowerShell', 'MySQL']
    },
    // ... more categories
  ];

  return (
    <div className="technical-skills">
      {skills.map((skill, index) => (
        <div key={index} className="technical-skill-category">
          <h3 className="technical-skill-heading">{skill.category}</h3>
          <ul className="technical-skill-list">
            {skill.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TechnicalSkills;
