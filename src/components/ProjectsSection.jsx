import React from 'react';
import './projectssection.css';

const projects = [
  {
    title: 'E-Commerce Website',
    description:
      'Built with the MERN stack with JWT auth, admin panel, and smooth cart/checkout features.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    liveLink: '',
    githubLink: '',
  },
  {
    title: 'E-Voting System',
    description:
      'A secure online voting app built with MERN and Polygon blockchain. Real-time results & tamper-proof votes.',
    techStack: ['MERN', 'Polygon', 'Blockchain'],
    liveLink: '',
    githubLink: '',
  },
  {
    title: 'Medical Chatbot',
    description:
      'AI-powered chatbot with disease prediction using image & symptom input. Built with Flutter & Firebase.',
    techStack: ['Flutter', 'Firebase', 'AI'],
    liveLink: '',
    githubLink: '',
  },
  {
    title: 'Movie Search App',
    description:
      'Search and view movies in real-time using 3rd-party API. Built with React.',
    techStack: ['React', 'Movie API'],
    liveLink: '',
    githubLink: '',
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            {project.liveLink && <a href={project.liveLink}>Live</a>}
            {project.githubLink && <a href={project.githubLink}>GitHub</a>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
