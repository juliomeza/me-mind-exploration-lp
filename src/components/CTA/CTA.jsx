// src/components/CTA/CTA.js
import React from 'react';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section id="contact" className={`${styles.ctaSection} section section-bg`}>
      <div className={`container ${styles.ctaContainer}`}>
        <h2 className={styles.ctaTitle}>Ready to Explore Your Potential?</h2>
        <p className={styles.ctaText}>
          Let's talk about how ME Mind Exploration can help you achieve your goals with innovative technological solutions.
        </p>
        {/* Change this to a mailto, contact form link, or modal */}
        <a href="mailto:contact@memindexploration.com" className="btn btn-primary">
          Let's Discuss Your Project
        </a>
      </div>
    </section>
  );
};

export default CTA;