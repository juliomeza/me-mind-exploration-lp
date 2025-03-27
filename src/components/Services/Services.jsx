// src/components/Services/Services.js
import React from 'react';
import styles from './Services.module.css';
// Importa iconos (ej. de react-icons, instala con: npm install react-icons)
import { FaTachometerAlt, FaDatabase, FaLaptopCode, FaFileAlt, FaBrain } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaTachometerAlt />,
    title: 'Executive Dashboards',
    description: 'Interactive and real-time data visualizations for informed decision-making.'
  },
  {
    icon: <FaFileAlt />,
    title: 'Sales Order Portals',
    description: 'Efficient web solutions for sales order management, integrated with your systems.'
  },
  {
    icon: <FaDatabase />,
    title: 'Data Integration',
    description: 'We connect your databases (SQL, NoSQL, etc.) and APIs for a unified information flow.'
  },
   {
    icon: <FaBrain />,
    title: 'AI Solutions',
    description: 'We implement Artificial Intelligence models to optimize processes, predict trends, and more.'
  },
  {
    icon: <FaLaptopCode />,
    title: 'Landing Pages & Web Apps',
    description: 'Design and development of professional, fast, and attractive web presences with React and Python.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section section-bg">
      <div className="container">
        <h2 className={styles.sectionTitle}>Our Technology Solutions</h2>
        <p className={styles.sectionSubtitle}>We create custom tools to enhance your business.</p>
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