import React from 'react';
import './skillssection.css';

const SkillsSection = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js",
     "MySQL", "MongoDB", "VS Code", "Git", "Figma"
  ];

  return (
    <section className="skills-section" id="skills">
      <h2>Technical & Tool Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
