import React from 'react';
import './aboutme.css';

const AboutMe = () => {
  return (
    <section className="about-me-section" id="about">
      {/* <p>
        I’m Riyaf K, a passionate web developer and MERN stack intern at iDatalytics. I build clean, responsive, and user-friendly websites and apps. With strong communication and time management skills, I strive to deliver impactful digital experiences.
      </p> */}

      <h3>Education</h3>
      <ul>
        <li><strong>BTech in Computer Science</strong> – Govt. Engineering College, Wayanad (2020–2024), Percentage: 65%</li>
        <li>Higher Secondary: SMM HSS, Rayirimangalam – 90%</li>
        <li>Secondary: PKMM HSS, Edarikode – 90%</li>
      </ul>

      <h3>Soft Skills</h3>
      <ul>
        <li>Quick Learner, Active Listener</li>
        <li>Adaptability, Time Management</li>
        <li>Positive Attitude, Hardworking</li>
      </ul>
    </section>
  );
};

export default AboutMe;
