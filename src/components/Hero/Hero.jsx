// src/components/Hero/Hero.js
import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={`${styles.hero} section`}>
      <div className={`container ${styles.heroContent}`}>
        <h1 className={styles.headline}>
          Transforma tu Negocio con <span className={styles.highlight}>IA</span> y Tecnología Avanzada
        </h1>
        <p className={styles.subheadline}>
          En ME Mind Exploration, creamos soluciones inteligentes a medida: Dashboards Ejecutivos, Portales de Ventas, Integraciones y más, impulsando tu éxito.
        </p>
        <div className={styles.ctaButtons}>
          <a href="#services" className="btn btn-primary">Descubre Soluciones</a>
          <a href="#contact" className="btn btn-secondary">Contáctanos</a>
        </div>
      </div>
      {/* Opcional: Elemento visual abstracto */}
      <div className={styles.visualElement}></div>
    </section>
  );
};

export default Hero;