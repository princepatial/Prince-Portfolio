import React, { useRef } from 'react';
import Header from './Components/Header.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Skills from './Pages/Skills.js';
import Projects from './Pages/Projects.js';
import Contact from './Pages/Contact.js';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header refs={refs} />
      <main className="snap-container">
        <section ref={homeRef} className="snap-section">
          <Home refs={refs} scrollToSection={scrollToSection} />
        </section>
        <section ref={aboutRef} className="snap-section">
          <About />
        </section>
        <section ref={skillsRef} className="snap-section">
          <Skills />
        </section>
        <section ref={projectsRef} className="snap-section">
          <Projects />
        </section>
        <section ref={contactRef} className="snap-section">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;