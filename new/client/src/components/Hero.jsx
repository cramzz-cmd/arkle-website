import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => (
  <section id="home" className="hero">
    <div className="container">
      <div className="hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            Flow battery systems engineered to deliver <span className="highlight">guaranteed uptime</span>
          </h1>
          <p className="hero-subtitle">
            We build, integrate, and operate flow battery infrastructure that outlasts lithium, secures grid stability, and proves ROI from day one.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Talk to a Specialist
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
