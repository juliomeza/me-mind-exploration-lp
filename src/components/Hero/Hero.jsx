// src/components/Hero/Hero.js
import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={`${styles.hero} section`}>
      <div className={`container ${styles.heroContent}`}>
        <h1 className={styles.headline}>
          Transform Your Business with <span className={styles.highlight}>AI</span> and Advanced Technology
        </h1>
        <p className={styles.subheadline}>
          At ME Mind Exploration, we create tailored intelligent solutions: Executive Dashboards, Sales Portals, Integrations and more, driving your success.
        </p>
        <div className={styles.ctaButtons}>
          <a href="#services" className="btn btn-primary">Discover Solutions</a>
          <a href="#contact" className="btn btn-secondary">Contact Us</a>
        </div>
      </div>
      {/* Opcional: Elemento visual abstracto */}
      <div className={styles.visualElement}></div>
    </section>
  );
};

export default Hero;