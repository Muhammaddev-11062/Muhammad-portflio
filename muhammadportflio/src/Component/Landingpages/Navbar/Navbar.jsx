
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../Image/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <span>Muhammad Ullah</span>
      </div>
      <nav className={`navbar ${isOpen ? 'active' : ''}`} id="navbar">
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About Me</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a>
        <a href="#contact" className="nav-btn" onClick={() => setIsOpen(false)}>Contact Me</a>
      </nav>

      {/* Simple Toggle Button */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </div>
    </header>
  );
}