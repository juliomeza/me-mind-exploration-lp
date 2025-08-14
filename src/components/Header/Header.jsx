// src/components/Header/Header.js
import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/Logo01.png'; // Ruta corregida para el logo

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <a href="#hero" className={styles.logoLink}>
          <img src={logo} alt="ME Mind Exploration Logo" className={styles.logo} />
          {/* Opcional: Añadir el nombre si el logo no lo incluye */}
          {/* <span className={styles.logoText}>ME Mind Exploration</span> */}
        </a>
        {/* Puedes añadir un menú de navegación simple aquí si lo necesitas */}
        <nav className={styles.nav}>
           <a href="#about">About Us</a>
           <a href="#services">Services</a>
           <a href="#technology">Technology</a>
           <a href="#contact" className={`btn btn-secondary ${styles.contactBtn}`}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;