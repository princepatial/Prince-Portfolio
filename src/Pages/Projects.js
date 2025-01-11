import React from 'react';
import Project1 from '../assets/project1.png'
import Project2 from '../assets/project2.jpeg'
import Project3 from '../assets/Project3.png'
import './Projects.css';

function Projects() {
  const projects = [
    { title: 'In-Resturant Food Order Website', image: Project3, description: 'A full-stack MERN appliaction in which user can order food to their table..', link: 'https://github.com/princepatial/wazwanres' },
    { title: 'Netflix Clone', image: Project1, description: 'A full-stack MERN application for using firebase authentication.', link: 'https://netflixclone-myproject.vercel.app/' },
    { title: 'Cinema Reservation System', image: Project2, description: 'We can book tickets to the movies through the website.', link: 'https://github.com/princepatial/Cinema_Resevation_System' },
    
  ];

  return (
    <div className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image" style={{backgroundImage: `url(${project.image})`}}></div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
