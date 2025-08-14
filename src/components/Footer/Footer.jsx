// src/components/Footer/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3 className={styles.brandName}>MIND EXPLORATION</h3>
            <p className={styles.tagline}>Enterprise Data Intelligence Platforms</p>
          </div>
          <div className={styles.footerContact}>
            <p><strong>Ready to Transform Your Data Operations?</strong></p>
            <p>Email: <a href="mailto:julio@mindexploration.ai">julio@mindexploration.ai</a></p>
            <p>Enterprise-grade platforms • Production-ready architecture</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Mind Exploration. All rights reserved. | Enterprise-grade solutions with 99.9% uptime SLA.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;