import React from 'react';
import styles from './About.module.css';
// Imagen para la sección About
import aboutImage from '../../assets/about-image.png';

const About = () => {
  return (
    <section id="about" className={`${styles.aboutSection} section`}>
      <div className={`container ${styles.aboutContainer}`}>
        {/* Columna de Texto */}
        <div className={styles.textContent}>
          <h2 className={styles.title}>Enterprise Data Intelligence Specialists</h2>
          <p className={styles.subtitle}>
            <strong>Mind Exploration</strong> architects production-ready platforms that transform enterprise data operations at scale.
          </p>
          <p className={styles.description}>
            We deliver complete, integrated solutions—not individual components. Our $45,000 implementation includes secure authentication, real-time ETL pipelines, carrier integrations, AI-powered analytics, and comprehensive monitoring. Every platform is built to enterprise standards with 99.9% uptime guarantees.
          </p>
          <p className={styles.description}>
            With deep expertise in SQL Server to PostgreSQL migrations, Firebase authentication, and OpenAI integration, we handle the complex technical architecture so you can focus on business growth. Our platforms include 2+ years of historical data backfill and ongoing 24/7 support.
          </p>
          <div className={styles.keyMetrics}>
            <div className={styles.metric}>
              <span className={styles.metricNumber}>99.9%</span>
              <span className={styles.metricLabel}>Uptime SLA</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricNumber}>$3K/mo</span>
              <span className={styles.metricLabel}>Support</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricNumber}>100+</span>
              <span className={styles.metricLabel}>Min Users</span>
            </div>
          </div>
          <div className={styles.values}>
            <span><i className={`fas fa-check ${styles.checkIcon}`}></i> Enterprise Security Standards</span>
            <span><i className={`fas fa-check ${styles.checkIcon}`}></i> Production-Ready Architecture</span>
            <span><i className={`fas fa-check ${styles.checkIcon}`}></i> 24/7 Monitoring & Support</span>
          </div>
        </div>

        {/* Columna de Imagen */}
        <div className={styles.imageContent}>
          <img
            src={aboutImage}
            alt="ME Mind Exploration - Data and Technology"
            className={styles.illustration}
          />
        </div>
      </div>
    </section>
  );
};

export default About;