import React from 'react';
import './Testimonials.css';
import waqas from '../../Image/waqas.jpg';
import safi from '../../Image/safi.jpg';

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h1 className="testimonials-main-heading">Testimonials</h1>
      <h2 className="section-title">
        What <span>Clients Say</span>
      </h2>

      <div className="testimonials-container">
        {/* Card 1 */}
        <div className="testimonial-card">
          <div className="profile-img-box">
            <img src={safi} alt="Safi" className="testimonial-img" />
          </div>
          <div className="testimonial-content">
            <p>
              "Safi ullah did an incredible job with our website. His attention to detail and design skills are top-notch!"
            </p>
            <h4>Safiullah</h4>
            <span>Web Developer & AI Automation</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="testimonial-card">
          <div className="profile-img-box">
            <img src={waqas} alt="Waqas" className="testimonial-img" />
          </div>
          <div className="testimonial-content">
            <p>
              "Very professional and delivered the project right on time. Highly recommend his services!"
            </p>
            <h4>Muhammad Waqas</h4>
            <span>Web Developer & AI Automation</span>
          </div>
        </div>
      </div>
    </section>
  );
}