import React from 'react';
import './Skills.css';
import { FaCode, FaJs, FaReact, FaProjectDiagram } from 'react-icons/fa';

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">
        My <span>Skills</span>
      </h2>
      <div className="skills-container">
        <div className="skill-card">
          <FaCode style={{ fontSize: '40px', color: 'var(--primary-orange)' }} />
          <h3>HTML & CSS</h3>
          <p>Building clean, responsive UI layouts with modern HTML, CSS, and styling techniques.</p>
        </div>

        <div className="skill-card">
          <FaJs style={{ fontSize: '40px', color: 'var(--primary-orange)' }} />
          <h3>JavaScript</h3>
          <p>Writing clean, scalable code to create smooth UI interactions, logical workflows, and web features.</p>
        </div>

        <div className="skill-card">
          <FaReact style={{ fontSize: '40px', color: 'var(--primary-orange)' }} />
          <h3>React & Node.js</h3>
          <p>Building full-stack web applications with React and Node.js.</p>
        </div>

        <div className="skill-card">
          <FaProjectDiagram style={{ fontSize: '40px', color: 'var(--primary-orange)' }} />
          <h3>AI Automation & n8n</h3>
          <p>Building automated workflows, integrating AI agents, and streamlining complex business processes using n8n.</p>
        </div>
      </div>
    </section>
  );
}