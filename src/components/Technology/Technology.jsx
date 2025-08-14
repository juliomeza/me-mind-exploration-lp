// src/components/Technology/Technology.js
import React from 'react';
import styles from './Technology.module.css';
const technologyStacks = [
  {
    category: 'Backend & Data',
    technologies: [
      { name: 'Python', detail: 'FastAPI, Django, data processing' },
      { name: 'PostgreSQL', detail: 'Primary database with advanced features' },
      { name: 'SQL Server', detail: 'Enterprise data integration' },
      { name: 'Firebase', detail: 'Authentication & real-time features' }
    ]
  },
  {
    category: 'Frontend & UI',
    technologies: [
      { name: 'React', detail: 'Modern component architecture' },
      { name: 'TypeScript', detail: 'Type-safe development' },
      { name: 'Responsive Design', detail: 'Mobile-first approach' },
      { name: 'Dark Mode', detail: 'Professional UI patterns' }
    ]
  },
  {
    category: 'AI & Analytics',
    technologies: [
      { name: 'OpenAI GPT', detail: 'Natural language processing' },
      { name: 'Data Visualization', detail: 'Interactive charts & dashboards' },
      { name: 'Predictive Analytics', detail: 'ML-powered insights' },
      { name: 'NLP Queries', detail: 'Conversational data access' }
    ]
  },
  {
    category: 'Infrastructure',
    technologies: [
      { name: 'Render/Heroku', detail: 'Scalable cloud hosting' },
      { name: 'ETL Pipelines', detail: 'Real-time data synchronization' },
      { name: 'API Security', detail: 'Rate limiting & key management' },
      { name: 'Monitoring', detail: 'Health checks & alerting' }
    ]
  }
];

const Technology = () => {
  return (
    <section id="technology" className="section">
      <div className="container">
        <h2 className={styles.sectionTitle}>Production-Ready Technology Stack</h2>
        <p className={styles.sectionSubtitle}>
          Enterprise-grade architecture using modern, proven technologies for security, scalability, and maintainability.
        </p>
        <div className={styles.techStacksGrid}>
          {technologyStacks.map((stack, stackIndex) => (
            <div key={stackIndex} className={styles.techStack}>
              <h3 className={styles.stackTitle}>{stack.category}</h3>
              <div className={styles.techList}>
                {stack.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className={styles.techItem}>
                    <h4 className={styles.techName}>{tech.name}</h4>
                    <p className={styles.techDetail}>{tech.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.certificationBadge}>
          <p><strong>Enterprise Standards:</strong> All implementations follow industry best practices for security (OWASP), data protection (GDPR), and high availability (99.9% uptime SLA).</p>
        </div>
      </div>
    </section>
  );
};

export default Technology;