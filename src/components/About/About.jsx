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
          <h2 className={styles.title}>Who We Are</h2>
          <p className={styles.subtitle}>
            At <strong>ME Mind Exploration</strong>, we are architects of intelligence-driven digital solutions.
          </p>
          <p className={styles.description}>
            We specialize in transforming complex data into strategic clarity through cutting-edge technology. We create intuitive executive dashboards, efficient sales portals, and perform robust system integrations (SQL, APIs, etc.), all powered by intelligent analysis and AI models.
          </p>
          <p className={styles.description}>
            Using tools like Python and React, and staying current with the latest advances in AI, we build the tools you need to explore the hidden potential in your data and optimize your business processes. We also design attractive and functional landing pages to enhance your online presence.
          </p>
          <div className={styles.values}>
            {/* You can list some key values here if you wish */}
            <span><i className={`fas fa-check ${styles.checkIcon}`}></i> Constant Innovation</span>
            <span><i className={`fas fa-check ${styles.checkIcon}`}></i> Tailored Solutions</span>
            <span><i className={`fas fa-check ${styles.checkIcon}`}></i> Cutting-Edge Technology</span>
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