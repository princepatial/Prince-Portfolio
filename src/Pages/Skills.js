import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'MongoDB', level: 90 },
    { name: 'Express.js', level: 85 },
    { name: 'React', level: 95 },
    { name: 'Node.js', level: 88 },
    { name: 'JavaScript', level: 92 },
    { name: 'HTML/CSS', level: 90 },
  ];

  return (
    <div className="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar-container">
              <div className="skill-bar" style={{width: `${skill.level}%`}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
