import React, { useState } from 'react';
import India from '@svg-maps/india';
import './About.css';
import './LocationsMap.css';

const LocationsMap = () => {
  const [hoveredState, setHoveredState] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const stateData = {
    'maharashtra': { projects: 45, capacity: '1.2 GW', installations: 15, summary: 'Mumbai load pocket firming with 8-12 hour assets.' },
    'karnataka': { projects: 38, capacity: '980 MW', installations: 12, summary: 'Domestic manufacturing hub with integrated EMS pilots.' },
    'tamil-nadu': { projects: 42, capacity: '1.1 GW', installations: 14, summary: 'Wind-solar hybrids near Chennai and Coimbatore corridors.' },
    'gujarat': { projects: 35, capacity: '850 MW', installations: 11, summary: 'Industrial microgrids and port resilience programs.' },
    'rajasthan': { projects: 28, capacity: '720 MW', installations: 9, summary: 'Desert solar firming with 16-24 hour discharge windows.' },
    'andhra-pradesh': { projects: 32, capacity: '800 MW', installations: 10, summary: 'SECI hybrid tenders with coastal grid services.' },
    'telangana': { projects: 30, capacity: '750 MW', installations: 9, summary: 'Peak shaving for industrial campuses and data centres.' },
    'madhya-pradesh': { projects: 25, capacity: '600 MW', installations: 8, summary: 'Agricultural feeders and rural microgrid pilots.' },
    'uttar-pradesh': { projects: 22, capacity: '550 MW', installations: 7, summary: 'High-demand urban nodes requiring evening ramp cover.' },
    'west-bengal': { projects: 20, capacity: '500 MW', installations: 6, summary: 'Grid resilience for eastern industrial belts.' },
    'delhi': { projects: 18, capacity: '450 MW', installations: 5, summary: 'Critical infrastructure back-up and black-start capability.' },
    'haryana': { projects: 16, capacity: '400 MW', installations: 5, summary: 'C&I retrofits anchoring round-the-clock commitments.' }
  };

  const focusStates = [
    'maharashtra',
    'karnataka',
    'tamil-nadu',
    'gujarat'
  ].map((id) => ({ id, name: getStateName(id), summary: stateData[id].summary }));

  const coverageSnapshot = [
    { label: 'States active', value: '12 live programs' },
    { label: 'Active projects', value: '349+ deployments' },
    { label: 'Installed capacity', value: '8.65 GW pipeline' },
    { label: 'Installations', value: '126 commissioned sites' }
  ];

  const networkInsights = [
    {
      badge: 'Policy traction',
      highlight: 'MNRE and SECI hybrid tenders accelerating adoption',
      detail: 'Vanadium flow assets qualify for LDES incentives and viability gap funding, speeding DISCOM approvals.'
    },
    {
      badge: 'Customer mix',
      highlight: 'Utilities, industrial campuses, and data centres',
      detail: 'Dual-track go-to-market balances grid services with peak shaving and resilience contracts.'
    },
    {
      badge: 'Service coverage',
      highlight: 'Round-the-clock support via Bengaluru operations hub',
      detail: 'Command centre monitors assets nationwide with predictive maintenance and rapid response SLAs.'
    }
  ];

  const handleStateHover = (event) => {
    const stateId = event.target.id;
    if (stateData[stateId]) {
      setHoveredState(stateId);
      event.target.style.transformOrigin = 'center';
    }
  };

  const handleStateLeave = (event) => {
    setHoveredState(null);
    event.target.style.transform = 'scale(1)';
  };

  const handleStateClick = (event) => {
    const stateId = event.target.id;
    if (stateData[stateId]) {
      setSelectedState((prev) => (prev === stateId ? null : stateId));
      if (selectedState !== stateId) {
        setTimeout(() => {
          document.querySelector('.locations-state-details')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 120);
      }
    }
  };

  function getStateName(id) {
    return id
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  return (
    <section id="locations" className="locations-map about">
      <div className="container">
        <div className="about-content">
          <div className="about-top-grid">
            <div className="about-left-stack">
              <div className="about-card about-overview locations-overview">
                <h3 className="about-card-title">Nationwide VRFB deployment footprint</h3>
                <p className="about-card-text">
                  Arkle Energy deploys vanadium flow batteries across twelve Indian states, pairing long-duration discharge with
                  policy-aligned service models. Every site is monitored centrally to keep uptime and safety benchmarks intact.
                </p>
              </div>
              <div className="about-card about-capabilities locations-focus">
                <div className="about-section-header">
                  <h3>Regional roll-out</h3>
                  <p className="locations-kicker">Priority programmes shaping expansion</p>
                </div>
                <div className="capability-list">
                  {focusStates.map((state, index) => (
                    <div key={state.id} className="capability-card">
                      <div className="capability-index">{String(index + 1).padStart(2, '0')}</div>
                      <div className="capability-copy">
                        <h4>{state.name}</h4>
                        <p>{state.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <aside className="about-metrics locations-metrics">
              <div className="about-metrics-header">
                <h3>Coverage snapshot</h3>
                <p>Indicative metrics showing deployment breadth, capacity committed, and on-ground assets.</p>
              </div>
              <div className="snapshot-strip metrics-grid">
                {coverageSnapshot.map((item) => (
                  <div key={item.label} className="snapshot-chip">
                    <span className="chip-label">{item.label}</span>
                    <span className="chip-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="about-bottom-grid">
            <div className="about-section about-execution locations-interactive">
              <div className="locations-interactive-shell">
                <div className="locations-map-card">
                  <svg
                    viewBox={India.viewBox}
                    className="india-map-svg"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {India.locations.map((location) => (
                      <path
                        key={location.id}
                        id={location.id}
                        name={location.name}
                        d={location.path}
                        className={`india-state ${stateData[location.id] ? 'has-projects' : ''} ${hoveredState === location.id ? 'hovered' : ''} ${selectedState === location.id ? 'selected' : ''}`}
                        onMouseEnter={handleStateHover}
                        onMouseLeave={handleStateLeave}
                        onClick={handleStateClick}
                      />
                    ))}
                  </svg>

                  {hoveredState && stateData[hoveredState] && (
                    <div className="state-tooltip">
                      <h4>{getStateName(hoveredState)}</h4>
                      <div className="tooltip-stats">
                        <div className="tooltip-stat">
                          <span className="stat-label">Projects</span>
                          <span className="stat-value">{stateData[hoveredState].projects}</span>
                        </div>
                        <div className="tooltip-stat">
                          <span className="stat-label">Capacity</span>
                          <span className="stat-value">{stateData[hoveredState].capacity}</span>
                        </div>
                        <div className="tooltip-stat">
                          <span className="stat-label">Installations</span>
                          <span className="stat-value">{stateData[hoveredState].installations}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="locations-stats-row">
                  <div className="locations-stat">
                    <span className="stat-number">12</span>
                    <span className="stat-caption">States covered</span>
                  </div>
                  <div className="locations-stat">
                    <span className="stat-number">349+</span>
                    <span className="stat-caption">Active projects</span>
                  </div>
                  <div className="locations-stat">
                    <span className="stat-number">8.65 GW</span>
                    <span className="stat-caption">Total capacity</span>
                  </div>
                  <div className="locations-stat">
                    <span className="stat-number">126</span>
                    <span className="stat-caption">Installations</span>
                  </div>
                </div>
              </div>

              {selectedState && stateData[selectedState] && (
                <div className="locations-state-details">
                  <div className="details-header">
                    <h3>{getStateName(selectedState)}</h3>
                    <button type="button" className="close-btn" onClick={() => setSelectedState(null)}>
                      ✕
                    </button>
                  </div>
                  <div className="details-content">
                    <div className="detail-item">
                      <div className="detail-icon">📊</div>
                      <div>
                        <div className="detail-label">Active projects</div>
                        <div className="detail-value">{stateData[selectedState].projects}</div>
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-icon">⚡</div>
                      <div>
                        <div className="detail-label">Total capacity</div>
                        <div className="detail-value">{stateData[selectedState].capacity}</div>
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-icon">🏭</div>
                      <div>
                        <div className="detail-label">Installations</div>
                        <div className="detail-value">{stateData[selectedState].installations}</div>
                      </div>
                    </div>
                  </div>
                  <p className="detail-summary">{stateData[selectedState].summary}</p>
                </div>
              )}
            </div>

            <div className="about-section market-proof locations-insights">
              <div className="about-section-header">
                <h3>Expansion insights</h3>
                <p>Operational guardrails keeping deployments on schedule and policy-compliant nationwide.</p>
              </div>
              <div className="market-grid">
                {networkInsights.map((item) => (
                  <div key={item.badge} className="market-card">
                    <span className="market-badge">{item.badge}</span>
                    <p className="market-highlight">{item.highlight}</p>
                    <p className="market-detail">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsMap;
