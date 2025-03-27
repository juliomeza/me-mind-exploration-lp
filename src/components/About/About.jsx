import React from 'react';
import styles from './About.module.css';
// Opcional: Si tienes una imagen ilustrativa para esta sección
// import aboutIllustration from '../../assets/about-illustration.svg';

const About = () => {
  return (
    <section id="about" className={`${styles.aboutSection} section`}>
      <div className={`container ${styles.aboutContainer}`}>
        {/* Columna de Texto */}
        <div className={styles.textContent}>
          <h2 className={styles.title}>Quiénes Somos</h2>
          <p className={styles.subtitle}>
            En <strong>ME Mind Exploration</strong>, somos arquitectos de soluciones digitales impulsadas por la inteligencia.
          </p>
          <p className={styles.description}>
            Nos especializamos en transformar datos complejos en claridad estratégica a través de tecnología de vanguardia. Creamos dashboards ejecutivos intuitivos, portales de ventas eficientes y realizamos integraciones de sistemas robustas (SQL, APIs, etc.), todo potenciado por el análisis inteligente y modelos de IA.
          </p>
          <p className={styles.description}>
            Utilizando herramientas como Python y React, y manteniéndonos al día con los últimos avances en IA, construimos las herramientas que necesitas para explorar el potencial oculto en tus datos y optimizar tus procesos de negocio. También diseñamos landing pages atractivas y funcionales para potenciar tu presencia online.
          </p>
          <div className={styles.values}>
            {/* Puedes listar algunos valores clave aquí si lo deseas */}
            <span><i className={`fas fa-check ${styles.checkIcon}`}></i> Innovación Constante</span>
            <span><i className={`fas fa-check ${styles.checkIcon}`}></i> Soluciones a Medida</span>
            <span><i className={`fas fa-check ${styles.checkIcon}`}></i> Tecnología de Punta</span>
          </div>
        </div>

        {/* Columna de Imagen (Opcional) */}
        {/* <div className={styles.imageContent}>
          <img
            src={aboutIllustration} // Reemplaza con tu imagen
            alt="Ilustración sobre exploración de datos y tecnología"
            className={styles.illustration}
          />
        </div> */}
      </div>
    </section>
  );
};

export default About;