// src/components/Header/Header.js
import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.png'; // Asegúrate que la ruta es correcta

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
           <a href="#about">Nosotros</a>
           <a href="#services">Servicios</a>
           <a href="#technology">Tecnología</a>
           <a href="#contact" className={`btn btn-secondary ${styles.contactBtn}`}>Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;