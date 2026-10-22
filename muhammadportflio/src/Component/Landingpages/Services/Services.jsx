import React from 'react';
import './Services.css';
import { FaLaptopCode, FaProjectDiagram, FaPenNib } from 'react-icons/fa';

export default function Services() {
  return (
    <section className="services" id="services">
      <h2 className="section-title">
        My <span>Services</span>
      </h2>
      <div className="services-container">
        <div className="service-box">
          <FaLaptopCode style={{ fontSize: '40px', color: 'var(--primary-orange)' }} />
          <h3>Web Development</h3>
          <p>Building fast, responsive, and modern websites tailored to your business needs.</p>
        </div>
        <div className="service-box">
          <FaProjectDiagram style={{ fontSize: '40px', color: 'var(--primary-orange)' }} />
          <h3>AI Automation Specialist</h3>
          <p>Building smart, automated workflows and AI solutions to optimize business operations.</p>
        </div>
        <div className="service-box">
          <FaPenNib style={{ fontSize: '40px', color: 'var(--primary-orange)' }} />
          <h3>Content Creation</h3>
          <p>Producing engaging tech content and documentation for websites and blogs.</p>
        </div>
      </div>
    </section>
  );
}