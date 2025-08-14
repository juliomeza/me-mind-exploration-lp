import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div></div>
          
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