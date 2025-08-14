import React from 'react';
import styles from './Hero.module.css';
import logo from '../../assets/Logo.png';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.logoSection}>
            <img src={logo} alt="Mind Exploration Logo" className={styles.heroLogo} />
          </div>
          
          <div className={styles.badge}>
            Enterprise Data Intelligence Platform
          </div>
          
          <h1 className={styles.title}>
            Transform Your Data Operations with{' '}
            <span className={styles.highlight}>Mind Exploration</span>
          </h1>
          
          <p className={styles.description}>
            Production-ready platforms featuring secure authentication, real-time ETL pipelines, 
            carrier integrations, and AI-powered analytics. Built for enterprise scale with 
            comprehensive monitoring and support.
          </p>
          
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <div className={styles.metricValue}>99.9%</div>
              <div className={styles.metricLabel}>Uptime SLA</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricValue}>Enterprise</div>
              <div className={styles.metricLabel}>Security</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricValue}>24/7</div>
              <div className={styles.metricLabel}>Support</div>
            </div>
          </div>
          
          <div className={styles.actions}>
            <a href="#contact" className="btn btn-primary btn-lg">
              Schedule Consultation
            </a>
            <a href="#services" className="btn btn-outline btn-lg">
              View Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;