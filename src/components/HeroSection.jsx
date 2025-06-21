import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Riyaf</span>
        </h1>
        <p>
          A passionate Frontend Developer building responsive and accessible web experiences.
        </p>
        <a href="#projects" className="hero-button">
          View Projects
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
