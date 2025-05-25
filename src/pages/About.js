import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About</h1>
      <div className="about-content">
        <section className="about-section">
          <h2>About Our Project</h2>
          <p>
            This React project is a template designed to show developers how structure and layout
            are organized in React applications.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Features</h2>
          <ul>
            <li>Modern React structure (Functional Components)</li>
            <li>Page management with React Router</li>
            <li>Modular CSS approach</li>
            <li>Organized folder structure</li>
            <li>Reusable components</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About; 