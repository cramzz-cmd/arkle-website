import React from 'react';
import './About.css';
import './Mission.css';

const Mission = () => {
  const missionFocus = [
    {
      title: 'Long-duration certainty',
      description: 'Deploy VRFB assets that guarantee 6-32 hour autonomy with identical capacity in year twenty-five.'
    },
    {
      title: 'Domestic resilience',
      description: 'Localise Arkelyte electrolyte, Arkhon stack fabrication, and PCS integration to secure incentives and supply.'
    },
    {
      title: 'Circular deployment',
      description: 'Lease electrolyte to keep lifecycle costs predictable while retaining 60% residual value for customers.'
    }
  ];

  const missionSnapshot = [
    { label: 'India footprint', value: 'Projects executing across multiple states' },
    { label: 'Duration guarantee', value: '25+ years • 0% degradation' },
    { label: 'Global horizon', value: 'International rollout inside 12 months' },
    { label: 'Safety record', value: 'Non-flammable, non-toxic electrolyte' }
  ];

  const executionTracks = [
    {
      heading: 'Deployment cadence',
      bullets: [
        'DISCOM and IPP pilots locking 5-20 MWh assets through 2026.',
        'Hybrid renewable portfolios designed for round-the-clock PPAs.'
      ]
    },
    {
      heading: 'Manufacturing scale',
      bullets: [
        'Electrolyte processing and stack assembly colocated in Karnataka.',
        'QA lab benchmarking flow stacks against 99.9% uptime targets.'
      ]
    },
    {
      heading: 'Capital discipline',
      bullets: [
        'Series A program financing USD 400/kWh cost trajectory.',
        'Service model underwriting 25-year electrolyte leasing.'
      ]
    }
  ];

  const missionSignals = [
    {
      badge: 'Policy alignment',
      highlight: 'Anchored to MNRE LDES and 500 GW non-fossil roadmap',
      detail: 'Eligibility across VGF and PLI programs accelerates state tenders and SECI hybrid bids.'
    },
    {
      badge: 'Grid resilience',
      highlight: 'Dual-stack redundancy keeps uptime above 99.9%',
      detail: 'Black-start and islanding protocols validated across coastal and desert climates.'
    },
    {
      badge: 'Sustainable impact',
      highlight: '100% electrolyte recovery with domestic refining partners',
      detail: 'Close-the-loop partnerships guarantee material stewardship and end-of-life circularity.'
    }
  ];

  return (
    <section id="mission" className="mission about">
      <div className="container">
        <div className="about-content">
          <div className="about-top-grid">
            <div className="about-left-stack">
              <div className="about-card about-overview mission-overview">
                <h3 className="about-card-title">Executing India&apos;s long-duration storage mandate</h3>
                <p className="about-card-text">
                  We scale vanadium redox flow batteries that stabilise renewable-heavy grids, pairing domestic supply chains
                  with bankable performance guarantees for utilities, C&amp;I campuses, and hybrid developers seeking diesel-free resilience.
                </p>
              </div>
              <div className="about-card about-capabilities mission-focus">
                <div className="about-section-header">
                  <h3>Where we deliver</h3>
                  <p className="mission-kicker">Execution fronts anchored in proof</p>
                </div>
                <div className="capability-list">
                  {missionFocus.map((item, index) => (
                    <div key={item.title} className="capability-card">
                      <div className="capability-index">{String(index + 1).padStart(2, '0')}</div>
                      <div className="capability-copy">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <aside className="about-metrics mission-metrics">
              <div className="about-metrics-header">
                <h3>Progress markers</h3>
                <p>Each metric demonstrates how we de-risk commercial VRFB deployment before nationwide rollout.</p>
              </div>
              <div className="snapshot-strip metrics-grid">
                {missionSnapshot.map((item) => (
                  <div key={item.label} className="snapshot-chip">
                    <span className="chip-label">{item.label}</span>
                    <span className="chip-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
          <div className="about-bottom-grid">
            <div className="about-section about-execution mission-tracks">
              <div className="about-section-header">
                <h3>Execution tracks</h3>
              </div>
              <div className="about-pillars">
                {executionTracks.map((track) => (
                  <div key={track.heading} className="pillar-card">
                    <span className="pillar-heading">{track.heading}</span>
                    <ul>
                      {track.bullets.map((bullet, bulletIndex) => (
                        <li key={`${track.heading}-${bulletIndex}`}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-section market-proof mission-proof">
              <div className="about-section-header">
                <h3>Confidence signals</h3>
              </div>
              <div className="market-grid">
                {missionSignals.map((item) => (
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

export default Mission;
