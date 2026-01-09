import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="footer-logo">
              <span className="logo-text">ARKLE</span>
              <span className="logo-subtext">ENERGY</span>
            </Link>
            <p>Pioneering sustainable energy storage solutions for a cleaner tomorrow.</p>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <a
              className="social-link"
              href="https://in.linkedin.com/company/arkle-energy-solutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-icon" aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.04 8.5V18H3V8.5h3.04ZM4.52 7.25c-.97 0-1.75-.79-1.75-1.75A1.75 1.75 0 0 1 4.52 3.75c.96 0 1.75.79 1.75 1.75s-.79 1.75-1.75 1.75ZM21 18h-3.03v-4.75c0-1.13-.02-2.58-1.57-2.58-1.58 0-1.82 1.23-1.82 2.49V18h-3.03V8.5h2.9v1.29h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.98 3.56 4.56V18Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="social-text">LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Arkle Energy. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
