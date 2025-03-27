// src/components/Footer/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.copyright}>
          © {currentYear} ME Mind Exploration. All rights reserved.
        </p>
        {/* Optional: Links to social networks or policies */}
        {/* <div className={styles.footerLinks}>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;