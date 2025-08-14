// src/components/CTA/CTA.js
import React from 'react';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section id="contact" className={`${styles.ctaSection} section section-bg`}>
      <div className={`container ${styles.ctaContainer}`}>
        <h2 className={styles.ctaTitle}>Ready for Enterprise-Grade Data Intelligence?</h2>
        <p className={styles.ctaText}>
          Schedule a technical consultation to discuss your platform requirements. Our complete implementation includes everything you need for production deployment with ongoing enterprise support.
        </p>
        <div className={styles.ctaDetails}>
          <div className={styles.ctaDetail}>
            <strong>Implementation:</strong> Complete platform in 8-12 weeks
          </div>
          <div className={styles.ctaDetail}>
            <strong>Architecture:</strong> Enterprise-grade security & scalability
          </div>
          <div className={styles.ctaDetail}>
            <strong>SLA:</strong> 99.9% uptime with 24/7 monitoring
          </div>
        </div>
        <div className={styles.ctaButtons}>
          <a href="mailto:julio@mindexploration.ai" className="btn btn-primary">
            Schedule Technical Consultation
          </a>
          <a href="#services" className="btn btn-secondary">
            Review Platform Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;