import React from 'react';
import Profile from '../assets/main.jpeg'
import './About.css';

function About() {
  return (
    <div className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={Profile} alt="mypic" />
        </div>
        <div className="about-text">
          <p>I'm a Full-Stack Developer specializing in the MERN stack, transforming ideas into scalable web applications. I focus on writing clean code and creating intuitive user experiences that solve real problems.</p>
          <p>When I'm not coding, I'm exploring new technologies and staying up-to-date with the latest web development trends.</p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
