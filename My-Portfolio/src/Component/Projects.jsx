import React from 'react';

const projects = [
  { title: 'Project One', description: 'A brief description of Project One.', image: 'https://via.placeholder.com/300' },
  { title: 'Project Two', description: 'A brief description of Project Two.', image: 'https://via.placeholder.com/300' },
  { title: 'Project Three', description: 'A brief description of Project Three.', image: 'https://via.placeholder.com/300' },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="animate-fade-in">My Projects</h2>
      <div className="project-gallery">
        {projects.map((project, index) => (
          <div key={index} className="project-item animate-slide-up">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
