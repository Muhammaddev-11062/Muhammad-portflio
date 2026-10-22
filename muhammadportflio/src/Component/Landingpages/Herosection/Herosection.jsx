import React from 'react';
import './Herosection.css';
import muhammad from '../../Image/muhammad.jpg'

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, I'm <br />
          <span>Muhammad Ullah</span>
        </h1>
        <p className="tagline">
          Web Developer | AI Automation Specialist | Content Creator
        </p>
        <div className="btn-group">
          <a href="#projects" className="btn btn-primary">
            View My Projects
          </a>
          <a href="#about" className="btn btn-secondary">
            Learn More About Me
          </a>
        </div>
      </div>
      <div className="home-img">
        <div className="img-container">
          <img src={muhammad} alt="muhammad.jpg" />
        </div>
      </div>
    </section>
  );
}