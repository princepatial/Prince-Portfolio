import React from 'react';
import Profile from '../assets/me.jpg'
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
          <p>Hello! I'm Prince Patial, a passionate MERN stack developer with a keen eye for design and a love for creating seamless user experiences.</p>
          <p>With expertise in MongoDB, Express.js, React, and Node.js, I bring ideas to life through clean, efficient code and intuitive interfaces.</p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">1</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
