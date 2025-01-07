import React from 'react';
import main from '../assets/main-img.svg'
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="glitch-text">
          <span aria-hidden="true">Prince Patial</span>
          Prince Patial
          <span aria-hidden="true">Prince Patial</span>
        </h1>
        <h2 className="subtitle">MERN Stack Developer</h2>
        <p className="description">Crafting digital experiences with code and creativity</p>
        <Link to="/projects" className="cta-button">Explore My Work</Link>
      </div>
      <div className="home-image">
        <div className="image-container">
          <img src={main} alt=" " />
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </div>
  );
}

export default Home;
