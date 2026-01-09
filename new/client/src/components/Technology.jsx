import React from 'react';
import './About.css';
import './Technology.css';
import flowDiagram from '../assets/diagrams/vrfb-flow-diagram.png';

const Technology = () => {
  const architectureFocus = [
    {
      title: 'In-house VRFB engineering',
      description: 'Arkhon stacks, Arkelyte electrolyte, and Arkhave controls are engineered in-house with IP backed by IIT Madras and IIT Palakkad collaborations, certifying 25+ year performance with zero degradation.'
    },
    {
      title: 'Decoupled power & energy',
      description: 'External electrolyte tanks size energy while reactor stacks govern power, enabling 6-32 hour run times and effortless runtime extensions by adding liquid rather than new stacks.'
    },
    {
      title: 'Intrinsic safety & residual value',
      description: 'Non-flammable aqueous chemistry eliminates thermal runaway while the electrolyte retains 60% residual value after 25 years for reuse or resale.'
    }
  ];

  const techSnapshot = [
    { label: 'Operational life', value: '25+ years • Unlimited cycles' },
    { label: 'Capacity fade', value: '0% degradation verified' },
    { label: 'Residual value', value: '60% electrolyte buyback' },
    { label: 'Runtime range', value: '6-32 hour dispatch' }
  ];

  const deliveryTracks = [
    {
      heading: 'Flow architecture',
      bullets: [
        '10-30 kW stack blocks paired with 60-120 kWh tanks for 6-12 hour configurations.',
        'Add electrolyte volume for longer autonomy without touching stack hardware.'
      ]
    },
    {
      heading: 'Systems intelligence',
      bullets: [
        'Arkhave BMS synchronises pumps, valves, and SCADA for high-availability operations.',
        'Predictive controls optimise charge windows, temperature, and LCOS across the asset life.'
      ]
    },
    {
      heading: 'Deployment velocity',
      bullets: [
        'Domestic supply chain spanning electrolyte, stacks, and PCS ready for national rollout.',
        'Telecom, C&I, and utility pilots in India with global deployments targeted within 12 months.'
      ]
    }
  ];

  const productLineup = [
    {
      badge: 'Configuration',
      highlight: '10 kW / 60 kWh module',
      detail: 'Single stack architecture delivering 6 hour backup with no additional power spend.'
    },
    {
      badge: 'Configuration',
      highlight: '10 kW / 80 kWh module',
      detail: 'Extended electrolyte volume for 8 hour autonomy while retaining the same stack footprint.'
    },
    {
      badge: 'Configuration',
      highlight: '10 kW / 120 kWh module',
      detail: '12 hour discharge profile ideal for remote assets and peak management.'
    }
  ];

  const scalingOptions = [
    {
      badge: 'Power scaling',
      highlight: '20-30 kW stack arrays',
      detail: 'Parallel stack additions (2x/3x) lift power delivery without touching electrolyte inventory.'
    },
    {
      badge: 'Energy scaling',
      highlight: 'Need more hours?',
      detail: 'Right-size tank capacities to reach 32 hour runtime with the same balance-of-plant.'
    },
    {
      badge: 'Sector impact',
      highlight: 'Telecom to Utility',
      detail: 'Telecom tower backup, industrial peak shaving, renewable firming, and grid stability programs.'
    }
  ];

  const differentiators = [
    {
      badge: 'Arkelyte',
      highlight: 'Engineered electrolyte',
      detail: 'Stability-optimised chemistry elevates energy density, temperature resilience, and circular recovery programs.'
    },
    {
      badge: 'Arkhon',
      highlight: 'High-performance stacks',
      detail: 'Proprietary flow frames and membranes unlock compact, modular power blocks for any duty cycle.'
    },
    {
      badge: 'Arkhave',
      highlight: 'Integrated systems & BMS',
      detail: 'Supervisory intelligence orchestrates pumps, sensors, and PCS to safeguard uptime and efficiency.'
    }
  ];

  const technologyPanels = [
    {
      title: 'Modular configurations',
      kicker: 'Right-size runtime',
      items: productLineup
    },
    {
      title: 'Scaling pathways',
      kicker: 'Power and energy on demand',
      items: scalingOptions
    },
    {
      title: 'Proprietary stack',
      kicker: 'Arkelyte / Arkhon / Arkhave',
      items: differentiators
    }
  ];

  return (
    <section id="technology" className="technology about">
      <div className="container">
        <div className="about-content">
          <div className="about-top-grid">
            <div className="about-left-stack">
              <div className="about-card about-overview technology-overview">
                <h3 className="about-card-title">Redox flow batteries powering a clean energy backbone</h3>
                <p className="about-card-text">
                  Arkle designs and manufactures vanadium redox flow systems that stay reliable for more than 25 years. External
                  electrolyte tanks decouple energy from stack power, so customers unlock long-duration storage without lifetime
                  degradation or safety trade-offs. Backed by Pi Ventures and collaborations with IIT Madras and IIT Palakkad, we are
                  scaling nationwide projects today while preparing global deployments within the next 12 months.
                </p>
              </div>
            </div>
            <aside className="about-metrics technology-metrics">
              <div className="about-metrics-header">
                <h3>Technology snapshot</h3>
                <p>Benchmarks that anchor bankability, warranties, and policy alignment for VRFB deployment.</p>
              </div>
              <div className="snapshot-strip metrics-grid">
                {techSnapshot.map((item) => (
                  <div key={item.label} className="snapshot-chip">
                    <span className="chip-label">{item.label}</span>
                    <span className="chip-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
          <div className="technology-focus-spotlight">
            <div className="technology-focus-header">
              <span className="technology-focus-badge">Engineering focus</span>
              <h3>VRFB building blocks engineered end-to-end</h3>
              <p>
                Our stack, electrolyte, and control innovations operate as a single, bankable system. The spotlight below keeps
                the core pillars front and centre for teams reviewing specifications or preparing future diagrams.
              </p>
            </div>
            <div className="technology-focus-layout">
              <div className="technology-focus-cards">
                {architectureFocus.map((item, index) => (
                  <div key={`${item.title}-${index}`} className="technology-focus-card">
                    <span className="technology-focus-index">{String(index + 1).padStart(2, '0')}</span>
                    <div className="technology-focus-copy">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="technology-focus-diagram">
                <div className="technology-diagram-shell">
                  <span className="diagram-label">VRFB flow cycle</span>
                  <figure className="diagram-figure">
                    <img src={flowDiagram} alt="Flow battery architecture showing positive and negative electrolyte tanks connected to the central stack" className="diagram-image" />
                    <figcaption className="diagram-caption">
                      Positive and negative electrolyte tanks circulate through the stack via pumps, converting stored chemical
                      energy into power.
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="about-bottom-grid">
            <div className="about-section about-execution technology-tracks">
              <div className="about-section-header">
                <h3>Delivery blueprint</h3>
              </div>
              <div className="about-pillars technology-blueprint-grid">
                {deliveryTracks.map((track) => (
                  <div key={track.heading} className="pillar-card technology-blueprint-card">
                    <span className="pillar-heading">{track.heading}</span>
                    <ul className="technology-blueprint-list">
                      {track.bullets.map((bullet, bulletIndex) => (
                        <li key={`${track.heading}-${bulletIndex}`}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-section market-proof technology-proof">
              <div className="about-section-header">
                <h3>System building blocks</h3>
              </div>
              <div className="technology-panels">
                {technologyPanels.map((panel) => (
                  <div key={panel.title} className="technology-panel">
                    {panel.kicker && <span className="technology-panel-kicker">{panel.kicker}</span>}
                    <h4 className="technology-panel-title">{panel.title}</h4>
                    <ul className="technology-panel-list">
                      {panel.items.map((item) => (
                        <li key={`${panel.title}-${item.highlight}`} className="technology-panel-item">
                          <div className="technology-panel-headline">
                            {item.badge && <span className="technology-pill">{item.badge}</span>}
                            <span className="technology-panel-highlight">{item.highlight}</span>
                          </div>
                          {item.detail && <p className="technology-panel-detail">{item.detail}</p>}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="technology-footnote">
                <span className="tech-check">✓</span>
                <p>Advanced BMS orchestration plus recyclable electrolyte leasing deliver a safer, longer-lasting alternative to lithium systems—powering a clean energy future in harmony with nature.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
