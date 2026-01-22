import React from 'react';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiJavascript, SiGit, SiRedux, SiTailwindcss, SiPostman } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'React.js', icon: <SiReact /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Git & GitHub', icon: <SiGit /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'RESTful APIs', icon: <FaDatabase /> },
    { name: 'Postman', icon: <SiPostman /> },
  ];

  return (
    <div className="skills">
      <h2 className="section-title">Technologies I Work With</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;