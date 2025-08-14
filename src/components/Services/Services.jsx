import React from 'react';
import styles from './Services.module.css';
import { FaShieldAlt, FaDatabase, FaRobot, FaChartLine, FaServer, FaCogs } from 'react-icons/fa';

const platformFeatures = [
  {
    icon: <FaShieldAlt />,
    title: 'Secure Authentication',
    description: 'Role-based access control with Firebase, session management, and comprehensive audit logging.',
    features: ['Multi-role access', 'Session expiration', 'Complete audit trails']
  },
  {
    icon: <FaDatabase />,
    title: 'Real-Time ETL',
    description: 'Bi-directional data sync between SQL Server and PostgreSQL with comprehensive data migration.',
    features: ['Bi-directional sync', 'Historical data migration', 'Automated retries']
  },
  {
    icon: <FaCogs />,
    title: 'Carrier Integration',
    description: 'Production-ready integrations with FedEx, UPS, and USPS for logistics management.',
    features: ['Major carrier APIs', 'Real-time tracking', 'Rate limiting']
  },
  {
    icon: <FaRobot />,
    title: 'AI Analytics',
    description: 'OpenAI-powered chatbot with natural language querying and instant visualizations.',
    features: ['Natural language', 'Instant charts', 'Usage guardrails']
  },
  {
    icon: <FaChartLine />,
    title: 'Executive Dashboards',
    description: 'Advanced reporting with predefined templates, filters, and multi-format exports.',
    features: ['Executive templates', 'Advanced filters', 'Multi-format export']
  },
  {
    icon: <FaServer />,
    title: 'Enterprise Infrastructure',
    description: '24/7 monitoring, health checks, secure API management, and high availability.',
    features: ['24/7 monitoring', 'Auto key rotation', 'High availability']
  }
];

const Services = () => {
  return (
    <section id="services" className="section section-muted">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Platform Features</h2>
          <p className={styles.description}>
            Production-ready architecture with enterprise-grade security, reliability, and scalability.
          </p>
        </div>
        
        <div className={styles.grid}>
          {platformFeatures.map((feature, index) => (
            <div key={index} className={`card ${styles.featureCard}`}>
              <div className="card-header">
                <div className={styles.iconWrapper}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="card-title">{feature.title}</h3>
                  <p className="card-description">{feature.description}</p>
                </div>
              </div>
              
              <div className="card-content">
                <ul className={styles.featureList}>
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.featureItem}>
                      <div className={styles.checkIcon}>✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.summary}>
          <div className={`card ${styles.summaryCard}`}>
            <div className="card-header text-center">
              <h3 className="card-title">Complete Platform Solution</h3>
              <p className="card-description">
                All features integrated into a single, comprehensive platform. Enterprise-grade architecture with full technical support and ongoing maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;