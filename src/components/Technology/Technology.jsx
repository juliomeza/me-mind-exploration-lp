// src/components/Technology/Technology.js
import React from 'react';
import styles from './Technology.module.css';
// Podrías usar iconos de tecnologías si quieres (ej. de Devicon: npm i devicon)
// import 'devicon/devicon.min.css';

const technologies = [
  { name: 'Python', /* iconClass: 'devicon-python-plain' */ },
  { name: 'React', /* iconClass: 'devicon-react-original' */ },
  { name: 'Artificial Intelligence', /* icon: FaBrain */ },
  { name: 'Machine Learning', /* icon: FaRobot */ },
  { name: 'SQL Databases', /* icon: FaDatabase */ },
  { name: 'API Integration', /* icon: FaPlug */ },
  { name: 'Cloud Platforms', /* icon: FaCloud */ },
  { name: 'Modern Frontend', /* icon: FaCode */ },
];

const Technology = () => {
  return (
    <section id="technology" className="section">
      <div className="container">
        <h2 className={styles.sectionTitle}>Cutting-Edge Technology</h2>
        <p className={styles.sectionSubtitle}>
          We use a modern and robust technology stack to build scalable and efficient solutions.
        </p>
        <div className={styles.techGrid}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.techItem}>
              {/* <i className={`${tech.iconClass} ${styles.techIcon}`}></i> */}
              {/* O usa un componente de icono si prefieres */}
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;