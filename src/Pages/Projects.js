import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiFirebase, SiExpress } from 'react-icons/si';
import UGive from '../assets/UGive.png'
import TalkBrush from '../assets/TalkBrush.png'
import Church from '../assets/church.png'
import Project3 from '../assets/Project3.png'
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'UGive',
      image: UGive,
      description: 'A reward-based student engagement platform where users can send digital cards to friends, earn rewards, and grow their social network within their college or university ecosystem.',
      technologies: [<SiReact />, <SiNodedotjs />, <SiMongodb />, <SiExpress />],
      github: null,
      live: 'https://ugive.com.au'
    },


    {
      title: 'TALKBrush',
      image: TalkBrush,
      description: 'A real-time communication platform that enables two or more users to interact instantly, with support for conversations in their preferred accent for a more natural and personalized experience.',
      technologies: [<SiReact />, <SiNodedotjs />, <SiMongodb />, <SiExpress />],
      github: null,
      live: 'https://talkbrush.com'
    },


    {
      title: 'Church Translator',
      image: Church,
      description: 'A live sermon broadcasting platform that allows churches to stream sermons in real time, enabling congregation members to listen remotely and stay connected to their church community.',
      technologies: [<SiReact />, <SiNodedotjs />, <SiMongodb />, <SiExpress />],
      github: null,
      live: 'https://churchtranslator.com/'
    },


    {
      title: 'In-Restaurant Food Ordering System',
      image: Project3,
      description: 'A web-based system that allows customers to view the menu, place food orders directly from their table, and helps restaurants receive and manage orders efficiently in real time.',
      technologies: [<SiReact />, <SiNodedotjs />, <SiMongodb />, <SiExpress />],
      github: 'https://github.com/princepatial/wazwanres',
      live: null
    },
    // {
    //   title: 'Netflix Clone',
    //   image: Project1,
    //   description: 'A Netflix-inspired streaming platform with Firebase authentication, dynamic content loading, and responsive design for seamless viewing experience.',
    //   technologies: [<SiReact />, <SiFirebase />],
    //   github: 'https://github.com/princepatial/netflix-clone',
    //   live: 'https://netflixclone-myproject.vercel.app/'
    // },
    // {
    //   title: 'Cinema Ticket Booking System',
    //   image: Project2,
    //   description: 'An online movie ticket reservation platform with seat selection, showtime management, and secure booking confirmation system.',
    //   technologies: [<SiReact />, <SiNodedotjs />, <SiMongodb />],
    //   github: 'https://github.com/princepatial/Cinema_Resevation_System',
    //   live: null
    // },
    // Add more projects here
    // { 
    //   title: 'E-Commerce Store', 
    //   image: Project4, 
    //   description: 'Full-featured online store with cart, checkout, payment gateway integration, and admin dashboard.',
    //   technologies: [<SiReact />, <SiNodedotjs />, <SiMongodb />],
    //   github: 'https://github.com/...',
    //   live: 'https://...'
    // },
  ];

  return (
    <div className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <p className="projects-subtitle">Here are some of my recent works that showcase my skills and experience</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
              <div className="project-overlay">
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link" title="View Code">
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="icon-link" title="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-icon">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;