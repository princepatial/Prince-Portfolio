import React, { useState, useEffect } from 'react';
import './Header.css';

function Header({ refs }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <span className="logo-text">&lt;DEV/&gt;</span>
      </div>

      <div
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className="nav">
        <ul className={isMenuOpen ? 'active' : ''}>
          <li><button onClick={() => scrollToSection(refs.home)}>Home</button></li>
          <li><button onClick={() => scrollToSection(refs.about)}>About</button></li>
          <li><button onClick={() => scrollToSection(refs.skills)}>Skills</button></li>
          <li><button onClick={() => scrollToSection(refs.projects)}>Projects</button></li>
          <li><button onClick={() => scrollToSection(refs.contact)}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;