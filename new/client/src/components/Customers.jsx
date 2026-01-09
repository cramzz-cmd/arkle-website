import React from 'react';
import './Customers.css';

const Customers = () => {
  const customers = [
    'Mlinda',
    'Goa Energy Development Agency',
    'BITS Hyderabad',
    'IIT Madras'
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedCustomers = [...customers, ...customers];

  const performanceMetrics = [
    {
      label: 'Annual degradation',
      value: '<0.5%',
      support: 'Industry avg 2.5%'
    },
    {
      label: 'Cycle life proven',
      value: '20,000',
      support: 'Industry avg 6,000'
    },
    {
      label: 'Lifetime CO₂ saved',
      value: '38 kt',
      support: 'Industry avg 12 kt'
    }
  ];

  return (
    <div className="customers-section">
      <div className="container">
        <div className="customers-header">
          <p className="customers-label">Trusted by Grid-Scale Leaders</p>
          <h3 className="customers-title">Partnering with utilities, EPCs, and energy innovators</h3>
        </div>
        <div className="customers-slider">
          <div className="customers-track">
            {duplicatedCustomers.map((customer, index) => (
              <div key={index} className="customer-item">
                <div className="customer-logo">
                  <span>{customer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="customers-proof">
          <h4>Proven performance in plain numbers</h4>
          <div className="customers-metrics">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="metric-figure">
                <span className="metric-value">{metric.value}</span>
                <span className="metric-label">{metric.label}</span>
                <span className="metric-support">{metric.support}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
