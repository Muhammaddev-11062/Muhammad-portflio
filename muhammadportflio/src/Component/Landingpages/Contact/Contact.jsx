import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>
      <form id="contact-form" className="contact-form">
        <input type="text" id="name" placeholder="Name" required />
        <input type="email" id="email" placeholder="Email" required />
        <textarea id="message" rows="5" placeholder="Message" required></textarea>
        <button type="submit" className="btn btn-primary btn-block">
          Send Message
        </button>
      </form>
    </section>
  );
}