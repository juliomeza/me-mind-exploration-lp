// src/components/Footer/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.copyright}>
          © {currentYear} ME Mind Exploration. Todos los derechos reservados.
        </p>
        {/* Opcional: Links a redes sociales o políticas */}
        {/* <div className={styles.footerLinks}>
          <a href="/privacy-policy">Política de Privacidad</a>
          <a href="/terms">Términos de Servicio</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;