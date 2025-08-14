import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/Logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <a href="#hero" className={styles.logoLink}>
            <img src={logo} alt="Mind Exploration Logo" className={styles.logo} />
            <span className={styles.logoText}>MIND EXPLORATION</span>
          </a>
          
          <nav className={styles.nav}>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#services" className={styles.navLink}>Platform</a>
            <a href="#technology" className={styles.navLink}>Technology</a>
            <a href="#contact" className="btn btn-primary">
              Schedule Demo
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;