// src/components/Services/Services.js
import React from 'react';
import styles from './Services.module.css';
// Importa iconos (ej. de react-icons, instala con: npm install react-icons)
import { FaTachometerAlt, FaDatabase, FaLaptopCode, FaFileAlt, FaBrain } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaTachometerAlt />,
    title: 'Executive Dashboards',
    description: 'Visualizaciones de datos interactivas y en tiempo real para tomar decisiones informadas.'
  },
  {
    icon: <FaFileAlt />,
    title: 'Portales de Entrada de Pedidos',
    description: 'Soluciones web eficientes para la gestión de órdenes de venta, integradas con tus sistemas.'
  },
  {
    icon: <FaDatabase />,
    title: 'Integración de Datos',
    description: 'Conectamos tus bases de datos (SQL, NoSQL, etc.) y APIs para un flujo de información unificado.'
  },
   {
    icon: <FaBrain />,
    title: 'Soluciones con IA',
    description: 'Implementamos modelos de Inteligencia Artificial para optimizar procesos, predecir tendencias y más.'
  },
  {
    icon: <FaLaptopCode />,
    title: 'Landing Pages y Web Apps',
    description: 'Diseño y desarrollo de presencias web profesionales, rápidas y atractivas con React y Python.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section section-bg">
      <div className="container">
        <h2 className={styles.sectionTitle}>Nuestras Soluciones Tecnológicas</h2>
        <p className={styles.sectionSubtitle}>Creamos herramientas a medida para potenciar tu negocio.</p>
        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;