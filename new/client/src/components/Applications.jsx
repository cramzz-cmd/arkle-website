import React, { useState } from 'react';
import './About.css';
import './Applications.css';

const Applications = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (cardId) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const heroHighlights = [
    { value: '25+ yr', label: 'Field Life' },
    { value: '0%', label: 'Capacity Degradation' },
    { value: '60%', label: 'Electrolyte Residual Value' }
  ];

  const pitchUseCases = [
    {
      client: 'Telecom towers',
      pain: 'High diesel costs, theft, and maintenance for remote BTS sites.',
      arkle: 'Deliver 6-12 hour backup, zero fire risk, and heat-tolerant uptime without diesel logistics.'
    },
    {
      client: 'Microgrids',
      pain: 'Intermittent renewables fail to provide round-the-clock resilience.',
      arkle: 'Store excess solar/wind by day and dispatch all night, guaranteeing true 24/7 power.'
    },
    {
      client: 'Industrial campuses',
      pain: 'Peak tariffs and downtime erode margins and safety compliance.',
      arkle: 'Charge off-peak, shave demand charges, and deliver non-flammable UPS-grade resilience.'
    }
  ];

  const gridApplications = [
    {
      sector: 'Generation',
      title: 'Renewable energy firming',
      description: 'Store surplus solar and wind output to deliver dispatchable, 24/7 clean power without curtailment.',
      advantages: [
        {
          title: '100% depth of discharge',
          detail: 'Drain the stack completely with no lifetime penalty, unlike lithium systems that restrict usable energy.'
        },
        {
          title: 'Scales with tanks',
          detail: 'Add electrolyte volume to extend duration without risky cell augmentation.'
        }
      ],
      example: {
        title: '50 MW solar farm goes round-the-clock',
        detail: 'Midday excess charges Arkle VRFBs for 8-10 hours, covering night-time demand like a steady thermal plant.'
      }
    },
    {
      sector: 'Transmission',
      title: 'Grid stability and ancillary services',
      description: 'Stabilise frequency, buffer congestion, and avoid costly transmission upgrades with instant response.',
      advantages: [
        {
          title: '20,000+ cycles proven',
          detail: 'Fast charge-discharge operations for frequency regulation without capacity fade.'
        },
        {
          title: 'Millisecond response',
          detail: 'Electrochemical reaction delivers power fast enough to arrest frequency dips and surges.'
        }
      ],
      example: {
        title: 'Frequency support during heat waves',
        detail: 'VRFBs inject power the moment millions of air-conditioners come online, averting brownouts with no line upgrades.'
      }
    },
    {
      sector: 'Distribution',
      title: 'Peak shaving and voltage support',
      description: 'Protect neighbourhood substations and feeders from evening peaks with safe, long-duration discharge.',
      advantages: [
        {
          title: '4-6 hour economics',
          detail: 'VRFB cost curve outperforms lithium once discharge windows exceed four hours.'
        },
        {
          title: 'Urban-safe chemistry',
          detail: 'Water-based electrolyte is non-flammable, ideal for dense residential deployments.'
        }
      ],
      example: {
        title: 'Substation upgrade deferred',
        detail: 'Arkle batteries discharge from 6-9 PM, shaving evening peaks and postponing a multi-million dollar asset replacement.'
      }
    },
    {
      sector: 'Commercial & industrial',
      title: 'Energy arbitrage and resilient UPS',
      description: 'Lower energy bills, guarantee uptime, and eliminate thermal risk for data-centric and manufacturing facilities.',
      advantages: [
        {
          title: 'Zero degradation trajectory',
          detail: 'Daily cycling delivers identical output in year twenty as day one, protecting ROI.'
        },
        {
          title: 'Inherent safety',
          detail: 'Non-flammable electrolyte removes insurance and compliance concerns around battery fires.'
        }
      ],
      example: {
        title: 'Tariff optimisation at a manufacturing plant',
        detail: 'Charge off-peak at night and discharge through peak tariff hours, trimming the energy bill by 40% while providing UPS coverage.'
      }
    },
    {
      sector: 'Microgrid',
      title: 'Islanding and remote power',
      description: 'Deliver long-duration autonomy for islands, resorts, defence bases, and remote communities tied to renewables.',
      advantages: [
        {
          title: 'Power-energy decoupling',
          detail: 'Upsize electrolyte tanks for 12-32 hour backup without adding expensive power electronics.'
        },
        {
          title: 'Seasonal resilience',
          detail: 'Stacks tolerate months at full charge or discharge with no performance loss.'
        }
      ],
      example: {
        title: 'Island resort stays diesel-free',
        detail: 'Arkle VRFBs cover 12-24 hours of cloudy-day demand, keeping operations smooth without generators.'
      }
    }
  ];

  const resilienceApplications = [
    {
      sector: 'Telecom',
      title: 'Base transceiver station backup',
      description: 'Replace diesel gensets and lead-acid banks at remote towers with theft-proof, temperature-tolerant storage.',
      advantages: [
        {
          title: 'Built-in theft deterrent',
          detail: 'Large electrolyte tanks with no resale value remove the incentive driving lithium and lead-acid theft.'
        },
        {
          title: 'High-temperature resilience',
          detail: 'Operate reliably up to 50°C without power-hungry cooling infrastructure.'
        }
      ],
      example: {
        title: 'Solar-charged tower in Rajasthan',
        detail: 'Daytime PV charges the VRFB; overnight discharge powers radios and cooling with zero diesel logistics or theft.'
      }
    },
    {
      sector: 'Aquaculture',
      title: 'Critical aeration and pumping',
      description: 'Guarantee oxygenation cycles for shrimp and fish farms through long outages without diesel contamination.',
      advantages: [
        {
          title: '10+ hour autonomy',
          detail: 'Scale tanks for overnight aeration coverage that keeps crops alive through extended grid cuts.'
        },
        {
          title: 'Corrosion-hardened design',
          detail: 'Hermetically sealed piping shrugs off humidity and salt mist that degrade conventional batteries.'
        }
      ],
      example: {
        title: 'Shrimp farm uptime in Andhra Pradesh',
        detail: 'VRFBs automatically run aeration pumps from 10 PM to 6 AM each night, eliminating diesel noise and pollution.'
      }
    },
    {
      sector: 'Rural electrification',
      title: 'Village microgrids and community power',
      description: 'Pair solar arrays with VRFB storage to deliver safe, maintenance-light power across remote settlements.',
      advantages: [
        {
          title: 'Unlimited shelf life',
          detail: 'Tolerate months at full discharge without sulfation, supporting seasonal projects and weather delays.'
        },
        {
          title: 'Non-flammable electrolyte',
          detail: 'Water-based chemistry removes fire risk in dense villages with thatched roofs and crop storage.'
        }
      ],
      example: {
        title: 'Central microgrid for 50 homes',
        detail: 'An Arkle battery stores daytime solar and delivers 12 hours of evening power with virtually no maintenance visits.'
      }
    }
  ];

  const gridSummaryRows = [
    {
      feature: 'Lifespan',
      arkle: '25+ years • Unlimited cycles',
      lithium: '7-10 years • Cycle-limited'
    },
    {
      feature: 'Fire safety',
      arkle: '100% non-flammable aqueous electrolyte',
      lithium: 'Risk of thermal runaway and fire'
    },
    {
      feature: 'Capacity loss',
      arkle: '0% degradation across lifecycle',
      lithium: 'Fade accelerates with use and heat'
    },
    {
      feature: 'Best-fit duration',
      arkle: 'Long-duration (4+ hour) programmes',
      lithium: 'Short-duration (< 4 hour) peaks'
    }
  ];

  const resilienceSummaryRows = [
    {
      feature: 'Theft risk',
      arkle: 'Heavy liquid electrolyte with no scrap value',
      lithium: 'Compact modules frequently targeted and resold'
    },
    {
      feature: 'Cooling needs',
      arkle: 'None — stable operation up to 50°C',
      lithium: 'Requires active cooling above 25°C'
    },
    {
      feature: 'Maintenance',
      arkle: 'Annual visual inspection',
      lithium: 'Frequent topping, balancing, and replacement'
    },
    {
      feature: 'Deep discharge',
      arkle: '100% usable capacity with no degradation',
      lithium: '50-80% usable before lifetime penalty'
    }
  ];

  return (
    <section id="applications" className="applications">
      <div className="container">
        <header className="applications-hero">
          <div className="applications-hero-copy">
            <span className="applications-eyebrow">Where VRFBs excel</span>
            <h2>Applications that unlock firm, safe long-duration storage</h2>
            <p>
              From utility-scale renewables to remote telecom towers, Arkle flow batteries deliver dependable energy where safety,
              uptime, and lifecycle economics matter most.
            </p>
          </div>
          <div className="applications-hero-stats">
            {heroHighlights.map((stat) => (
              <div key={stat.label} className="applications-stat">
                <span className="applications-stat-value">{stat.value}</span>
                <span className="applications-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </header>

        <div className="applications-section applications-pitch">
          <div className="applications-section-header">
            <span className="applications-section-badge">Problem → Solution</span>
            <h3>Where Arkle outperforms lithium and diesel today</h3>
            <p>Commercial and industrial clients unlock durable, non-flammable storage tailored to their operating pain points.</p>
          </div>
          <div className="applications-pitch-grid">
            {pitchUseCases.map((item) => (
              <div key={item.client} className="applications-pitch-card">
                <div className="pitch-card-head">
                  <span className="pitch-client">{item.client}</span>
                </div>
                <div className="pitch-row">
                  <span className="pitch-label">Pain point</span>
                  <p>{item.pain}</p>
                </div>
                <div className="pitch-row">
                  <span className="pitch-label">Arkle pitch</span>
                  <p>{item.arkle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="applications-section">
          <div className="applications-section-header">
            <span className="applications-section-badge">Grid & Utilities</span>
            <h3>Stabilising generation, transmission, and distribution</h3>
            <p>VRFB systems manage renewable intermittency, frequency events, peak loads, and industrial uptime with zero degradation.</p>
          </div>
          <div className="applications-grid">
            {gridApplications.map((item, index) => {
              const cardId = `grid-${index}`;
              const isOpen = Boolean(expandedCards[cardId]);

              return (
              <article key={item.sector} className="application-card">
                <div className="application-card-header">
                  <span className="application-sector">{item.sector}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="application-card-body">
                    <button
                      type="button"
                      className={`application-toggle ${isOpen ? 'is-open' : ''}`}
                      onClick={() => toggleCard(cardId)}
                      aria-expanded={isOpen}
                      aria-controls={`${cardId}-details`}
                    >
                      <span>Why Arkle VRFB</span>
                      <span className="toggle-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                    </button>
                    <div
                      id={`${cardId}-details`}
                      className={`application-advantages ${isOpen ? 'is-visible' : ''}`}
                    >
                      <ul>
                        {item.advantages.map((adv) => (
                          <li key={`${item.sector}-${adv.title}`}>
                            <span className="adv-title">{adv.title}</span>
                            <span className="adv-detail">{adv.detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  <div className="application-example">
                    <h4>Use case in action</h4>
                    <div className="example-card">
                      <h5>{item.example.title}</h5>
                      <p>{item.example.detail}</p>
                    </div>
                  </div>
                </div>
              </article>
              );
            })}
          </div>
        </div>

        <div className="applications-section">
          <div className="applications-section-header">
            <span className="applications-section-badge">Off-grid & resilience</span>
            <h3>Powering telecom, aquaculture, and rural communities</h3>
            <p>Long-duration storage that eliminates diesel, survives harsh environments, and keeps critical services online.</p>
          </div>
          <div className="applications-grid">
            {resilienceApplications.map((item, index) => {
              const cardId = `resilience-${index}`;
              const isOpen = Boolean(expandedCards[cardId]);

              return (
              <article key={item.sector} className="application-card">
                <div className="application-card-header">
                  <span className="application-sector">{item.sector}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="application-card-body">
                    <button
                      type="button"
                      className={`application-toggle ${isOpen ? 'is-open' : ''}`}
                      onClick={() => toggleCard(cardId)}
                      aria-expanded={isOpen}
                      aria-controls={`${cardId}-details`}
                    >
                      <span>Why Arkle VRFB</span>
                      <span className="toggle-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                    </button>
                    <div
                      id={`${cardId}-details`}
                      className={`application-advantages ${isOpen ? 'is-visible' : ''}`}
                    >
                      <ul>
                        {item.advantages.map((adv) => (
                          <li key={`${item.sector}-${adv.title}`}>
                            <span className="adv-title">{adv.title}</span>
                            <span className="adv-detail">{adv.detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  <div className="application-example">
                    <h4>Use case in action</h4>
                    <div className="example-card">
                      <h5>{item.example.title}</h5>
                      <p>{item.example.detail}</p>
                    </div>
                  </div>
                </div>
              </article>
              );
            })}
          </div>
        </div>

        <div className="applications-summary">
          <div className="applications-summary-header">
            <h3>VRFB advantage at a glance</h3>
            <p>Key metrics that demonstrate why Arkle outperforms conventional lithium for long-duration duty cycles.</p>
          </div>
          <table className="applications-summary-table">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">Arkle Energy VRFB</th>
                <th scope="col">Traditional lithium-ion</th>
              </tr>
            </thead>
            <tbody>
              {gridSummaryRows.map((row) => (
                <tr key={row.feature}>
                  <th scope="row" className="summary-feature">{row.feature}</th>
                  <td>{row.arkle}</td>
                  <td>{row.lithium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="applications-summary">
          <div className="applications-summary-header">
            <h3>Off-grid and remote site resilience</h3>
            <p>How Arkle VRFBs outperform lead-acid and lithium systems where theft, heat, and deep discharge are daily realities.</p>
          </div>
          <table className="applications-summary-table">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">Arkle Energy VRFB</th>
                <th scope="col">Lead-acid / lithium</th>
              </tr>
            </thead>
            <tbody>
              {resilienceSummaryRows.map((row) => (
                <tr key={row.feature}>
                  <th scope="row" className="summary-feature">{row.feature}</th>
                  <td>{row.arkle}</td>
                  <td>{row.lithium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Applications;
