import React from 'react';
import './Projects.css';
import portflioproject from '../../Image/portflioproject.jpg'
import golddigger from '../../Image/golddigger.jpg'
import bot from '../../Image/bot.jpg'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>
      <div className="projects-container">
        <div className="project-card">
          <div className="project-img">
            <img src={golddigger} alt="golddigger.jpg" />
            
          </div>
          <h3>Gold Digger</h3>
          <p>An interactive gold valuation and trading web application built using HTML, CSS, and JavaScript.</p>
          <a href="#projects" className="btn btn-primary btn-sm">View Project</a>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={bot} alt="bot.jpg" />
          </div>
          <h3>RAG CHAT BOT</h3>
          <p>An Ai-powered customer support chatbot built using n8n workflows for automated dynamic responses.</p>
          <a href="#projects" className="btn btn-primary btn-sm">View Project</a>
        </div>

        <div className="project-card">
          <div className="project-img">
            <img src={portflioproject} alt="portflioproject.jpg" />
          </div>
          <h3>Portfolio Website</h3>
          <p>
            A responsive portfolio website developed with React.js, modern CSS, and JavaScript to highlight my web development and automation work.
          </p>
          <a href="#projects" className="btn btn-primary btn-sm">View Project</a>
        </div>
      </div>
    </section>
  );
}