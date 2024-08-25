import React from 'react';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="animate-fade-in">My Skills</h2>
      <ul className="animate-slide-up">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
