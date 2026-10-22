import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">
        About <span>Me</span>
      </h2>
      <div className="about-content">
        <p>
          I'm a passionate web developer and AI automation specialist dedicated to creating clean, efficient websites and smart automated workflows. I have a strong background in HTML, CSS, JavaScript, and React, paired with hands-on experience in building automated systems using n8n and AI tools. I love taking on challenges and turning complex ideas into seamless digital solutions through code and automation.
        </p>
        <a href="#contact" className="btn btn-primary">Get in Touch</a>
      </div>
    </section>
  );
}