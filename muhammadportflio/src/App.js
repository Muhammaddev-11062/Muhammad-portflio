import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Landingpages/Home';
import Navbar from './Component/Landingpages/Navbar/Navbar';
import Herosection from './Component/Landingpages/Herosection/Herosection';
import Services from './Component/Landingpages/Services/Services';
import About from './Component/Landingpages/About/About';
import Skills from './Component/Landingpages/Skills/Skills';
import Projects from './Component/Landingpages/Projects/Projects';
import Testimonials from './Component/Landingpages/Testimonials/Testimonials';
import Contact from './Component/Landingpages/Contact/Contact';
import Footer from './Component/Landingpages/Footer/Footer';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Herosection" element={<Herosection />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}