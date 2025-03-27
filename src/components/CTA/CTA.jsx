// src/components/CTA/CTA.js
import React from 'react';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section id="contact" className={`${styles.ctaSection} section section-bg`}>
      <div className={`container ${styles.ctaContainer}`}>
        <h2 className={styles.ctaTitle}>¿Listo para Explorar tu Potencial?</h2>
        <p className={styles.ctaText}>
          Hablemos sobre cómo ME Mind Exploration puede ayudarte a alcanzar tus objetivos con soluciones tecnológicas innovadoras.
        </p>
        {/* Cambia esto por un mailto, link a formulario de contacto o modal */}
        <a href="mailto:contacto@memindexploration.com" className="btn btn-primary">
          Hablemos de tu Proyecto
        </a>
      </div>
    </section>
  );
};

export default CTA;