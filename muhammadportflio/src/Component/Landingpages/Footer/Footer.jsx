import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>
          <FaPhone style={{ color: 'var(--primary-orange)', marginRight: '8px' }} />
          +92-33496-83353
        </p>
        <p>
          <FaEnvelope style={{ color: 'var(--primary-orange)', marginRight: '8px' }} />
          muhammadokz11062@gmail.com
        </p>
      </div>
      <div className="footer-copyright">
        <p>Created By Muhammad Ullah.okz | All Rights Reserved © 2026</p>
      </div>
    </footer>
  );
}