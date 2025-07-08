import React from 'react';
import useSequentialBackground from '../hooks/useSequentialBackground';
import './About.css';

const About = () => {
  // Change background every time About page loads
  useSequentialBackground();

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