import React from 'react';
import './App.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2 className="about-us-title">Welcome to Paradise Nursery</h2>
        <p className="about-us-tagline">Where Greenery Meets Serenity & Innovation</p>
        
        <p className="about-us-description">
          At Paradise Nursery, we are passionate about transforming living and working spaces into vibrant, air-purifying botanical sanctuaries. Founded with a vision to connect people with nature, our nursery brings together a rich collection of high-quality houseplants tailored to elevate your wellness, aesthetic, and mood.
        </p>

        <div className="about-us-features">
          <div className="feature-card">
            <div className="feature-icon">🌿</div>
            <h3>Air Purifying</h3>
            <p>Naturally filter indoor pollutants and boost oxygen levels for a refreshed home atmosphere.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌸</div>
            <h3>Aromatic Aromas</h3>
            <p>Soothe your senses with calming natural scents from lavender, jasmine, and mint.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌱</div>
            <h3>Medicinal Power</h3>
            <p>Cultivate healing herbs and therapeutic plants right in your personal indoor garden.</p>
          </div>
        </div>

        <p className="about-us-mission">
          <strong>Our Mission:</strong> To cultivate healthier homes and happier minds by delivering ethically grown, premium houseplants directly to your doorstep with expert care guidance every step of the way.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;