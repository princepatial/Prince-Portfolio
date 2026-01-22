import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import main from '../assets/main-img.svg'
import './Home.css';

function Home({ refs, scrollToSection }) {
  return (
    <div className="home">
      <div className="home-content">
        <p className="greeting">Hi, I'm</p>
        <h1 className="glitch-text">
          <span aria-hidden="true">Prince Patial</span>
          Prince Patial
          <span aria-hidden="true">Prince Patial</span>
        </h1>
        <h2 className="subtitle">Developer. Designer. Creator.</h2>
        <p className="description">
          Bringing ideas to life through innovative web solutions and seamless user experiences
        </p>

        <div className="cta-buttons">
          <button onClick={() => scrollToSection(refs.projects)} className="cta-button primary">
            View My Work
          </button>
          <a href="/PrinceResume.pdf" download className="cta-button resume-btn">
            <HiDownload /> Resume
          </a>
        </div>

        <div className="home-social">
          <a href="https://github.com/princepatial" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/princepatial/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href="https://x.com/that_patial?t=wtggDVydurYhr0m2HajiUw" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="home-image">
        <div className="image-container">
          <img src={main} alt="Prince Patial - Full Stack Developer" />
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </div>
  );
}

export default Home;