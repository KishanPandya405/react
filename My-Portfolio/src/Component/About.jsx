import React from 'react';
//import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from 'react-icons/fa';
import { FaReact } from "react-icons/fa";<FaReact />
import { FaHtml5 } from "react-icons/fa";<FaHtml5 />
import { FaCss3Alt } from "react-icons/fa";<FaCss3Alt />
import { FaJs } from "react-icons/fa";<FaJs />
import { FaNodeJs } from "react-icons/fa";<FaNodeJs />


const About = () => {
  return (
    <section className="about animate-fade-in">
      <div className="about-container">
        <div className="about-photo">
          <img src="src/assets/images/photo1.jpg" alt="Kishan Pandya" />
        </div>
        <div className="about-info">
          <h2>About Me</h2>
          <p>
            Hello! I’m Kishan Pandya, a passionate web developer with a love for creating beautiful and functional websites. I specialize in modern web technologies including:
          </p>
          <p>
            With a background in Computer Engineering, I bring a unique perspective to web development, ensuring that every project is not only technically sound but also visually stunning.
          </p>
          <p>
            In my free time, I enjoy exploring new technologies, hiking, and photography. Feel free to reach out if you’d like to collaborate on a project or just have a chat about technology and design!
          </p>
        </div>
      </div>
      <div className="skills-icons">
            <div className="icon"><FaReact size={40} /></div>
            <div className="icon"><FaHtml5 size={40} /></div>
            <div className="icon"><FaCss3Alt size={40} /></div>
            <div className="icon"><FaJs size={40} /></div>
            <div className="icon"><FaNodeJs size={40} /></div>
          </div>
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: <a href="mailto:kishanpandya405@gmail.com">kishanpandya405@gmail.com</a></p>
        <p>Phone: +91 84605 95230</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/kishan-pandya" target="_blank" rel="noopener noreferrer">Kishan Pandya</a></p>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Kishan Pandya. All rights reserved.</p>
          <p>
            <a href="mailto:kishan@example.com" className="footer-link">Contact Me</a>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default About;

