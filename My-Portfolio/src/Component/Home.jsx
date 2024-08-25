import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero animate-fade-in">
        <div className="hero-content">
          <h1>Hello, I'm Kishan Pandya</h1>
          <p>A passionate web developer who creates beautiful and functional websites.</p>
          <Link to="/about" className="btn-primary">Learn More</Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill-item animate-slide-up">
            <h3>React</h3>
            <p>Building dynamic and interactive UIs.</p>
          </div>
          <div className="skill-item animate-slide-up">
            <h3>JavaScript</h3>
            <p>Creating engaging and responsive web applications.</p>
          </div>
          <div className="skill-item animate-slide-up">
            <h3>CSS & HTML</h3>
            <p>Designing visually appealing and accessible web pages.</p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="projects-gallery">
          <div className="project-item animate-zoom-in">
            <img src="https://via.placeholder.com/300" alt="Project 1" />
            <h3>Project 1</h3>
            <p>A brief description of Project 1.</p>
          </div>
          <div className="project-item animate-zoom-in">
            <img src="https://via.placeholder.com/300" alt="Project 2" />
            <h3>Project 2</h3>
            <p>A brief description of Project 2.</p>
          </div>
          <div className="project-item animate-zoom-in">
            <img src="https://via.placeholder.com/300" alt="Project 3" />
            <h3>Project 3</h3>
            <p>A brief description of Project 3.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Get In Touch</h2>
        <p>If you have any questions or just want to connect, feel free to reach out!</p>
        <Link to="/contact" className="btn-primary">Contact Me</Link>
      </section>
    </div>
  );
};

export default Home;
