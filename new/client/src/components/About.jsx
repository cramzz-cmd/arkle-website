import React from 'react';
import './About.css';

const About = () => {
  const problemStatements = [
    'Lithium-ion banks fade after roughly 3,000 cycles (3-5 years) and expose assets to thermal runaway.',
    'Diesel backup is a carbon-intensive, high-maintenance expense that fails ESG audits and CFO targets.'
  ];

  const solutionStatements = [
    'Water-based vanadium electrolyte is non-flammable, non-toxic, and holds full usable capacity for 25+ years.',
    'Energy scales independently from power—clients add liquid electrolyte instead of purchasing new stacks when more hours are required.'
  ];

  const focusAreas = [
    {
      title: 'Bankable flow architecture',
      description: 'Stacks, electrolyte, and controls engineered in-house for 4-32 hour duty cycles with zero degradation drift.'
    },
    {
      title: 'Grid-proven delivery',
      description: 'Execution muscle across telecom, DISCOM, IPP, and C&I pilots where uptime and fire safety are non-negotiable.'
    },
    {
      title: 'Circular chemistry model',
      description: 'Electrolyte leasing keeps lifecycle costs predictable and underwrites 60% residual value at year twenty-five.'
    }
  ];

  const valuePillars = [
    {
      persona: 'The CFO pitch',
      highlight: '30% lower LCOS',
      bullets: [
        'Zero degradation means discharge capacity in year twenty mirrors day-one output.',
        'Vanadium electrolyte retains 60% residual value and can be reused or sold after 25 years.'
      ]
    },
    {
      persona: 'The risk manager pitch',
      highlight: 'Non-flammable & non-toxic',
      bullets: [
        'Aqueous electrolyte cannot catch fire, eliminating thermal runaway scenarios.',
        'No hazardous disposal pathways or hazmat containment requirements.'
      ]
    },
    {
      persona: 'The CTO pitch',
      highlight: 'True scalability',
      bullets: [
        'Decoupled architecture lets teams add stacks for power (kW) or tanks for energy (kWh).',
        'Need longer backup? Increase electrolyte volume without repurchasing power electronics.'
      ]
    }
  ];

  const executionTracks = [
    {
      heading: 'Engineering Core',
      bullets: [
        'End-to-end VRFB stack design validated for 4-32 hour cycles.',
        'Thermal, PCS, and SCADA integration managed by in-house specialists.'
      ]
    },
    {
      heading: 'Delivery Discipline',
      bullets: [
        'Pilot sites with DISCOMs, IPPs, and C&I campuses under execution.',
        'Circular electrolyte leasing model with assured recovery and reuse.'
      ]
    },
    {
      heading: 'Confidence Signals',
      bullets: [
        'Institutional diligence completed with independent techno-commercial audits.',
        'Supply partnerships across vanadium electrolyte, balance-of-plant, and EPC.'
      ]
    }
  ];

  const marketAngles = [
    {
      badge: 'Growth Tailwinds',
      highlight: 'USD 70.69M India VRFB TAM (2024) growing 11.8% CAGR',
      detail: 'Positioned to ride the global USD 1.18B vanadium storage curve by 2034 with domestic manufacturing incentives.'
    },
    {
      badge: 'Policy Fit',
      highlight: 'Aligned with 500 GW non-fossil target and LDES mandates',
      detail: 'PLI, viability gap funding, and ALMM compliance enable bankable 4+ hour storage in every state we enter.'
    },
    {
      badge: 'Safety Advantage',
      highlight: 'Non-flammable, 25-year electrolyte life',
      detail: 'Our chemistry eliminates thermal runaway and capacity fade, cutting lifecycle cost versus lithium incumbents.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-top-grid">
            <div className="about-card about-vision">
              <span className="about-kicker">Our Vision</span>
              <h3 className="about-card-title">India's long-duration storage backbone</h3>
              <p className="about-card-text">
                We are engineering a grid where utility, industrial, and community assets run on round-the-clock renewable power supported by resilient vanadium flow storage.
              </p>
              <p className="about-card-text">
                Every deployment is a step toward bankable, net-zero infrastructure that keeps critical loads online while accelerating India&apos;s clean energy transition.
              </p>
            </div>

            <div className="about-card about-overview">
              <h3 className="about-card-title">Flow storage engineered for India&apos;s grid edge</h3>
              <p className="about-card-text">
                We build India&apos;s most reliable <span className="text-glow">vanadium flow battery infrastructure</span>, pairing engineering depth with execution discipline to stabilise renewable-heavy grids and decarbonise critical power.
              </p>
            </div>

            <div className="about-card about-comparison">
              <div className="about-section-header">
                <h3>Problem vs. solution</h3>
                <p>Why long-duration storage buyers need a chemistry built for decades, not just years.</p>
              </div>
              <div className="about-comparison-grid">
                <div className="about-comparison-column">
                  <span className="comparison-kicker">Status quo pain</span>
                  <ul>
                    {problemStatements.map((item, index) => (
                      <li key={`problem-${index}`}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="about-comparison-column">
                  <span className="comparison-kicker">Arkle response</span>
                  <ul>
                    {solutionStatements.map((item, index) => (
                      <li key={`solution-${index}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div id="capabilities" className="about-card about-capabilities">
              <div className="about-section-header">
                <h3>Where we focus</h3>
              </div>
              <div className="capability-list">
                {focusAreas.map((item, index) => (
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

            <div className="about-card about-value">
              <div className="about-section-header">
                <h3>Why partners choose Arkle</h3>
              </div>
              <div className="about-value-grid">
                {valuePillars.map((pillar) => (
                  <div key={pillar.persona} className="about-value-card">
                    <span className="about-value-persona">{pillar.persona}</span>
                    <h4>{pillar.highlight}</h4>
                    <ul>
                      {pillar.bullets.map((bullet, index) => (
                        <li key={`${pillar.persona}-${index}`}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

            <div className="about-bottom-grid">
              <div id="execution-tracks" className="about-section about-execution">
              <div className="about-section-header">
                <h3>How we execute</h3>
              </div>
              <div className="about-pillars">
                {executionTracks.map((track, index) => (
                  <div key={track.heading} className="pillar-card">
                    <span className="pillar-heading">{track.heading}</span>
                    <ul>
                      {track.bullets.map((bullet, bulletIndex) => {
                        const firstSpace = bullet.indexOf(' ');
                        const firstWord = firstSpace > 0 ? bullet.substring(0, firstSpace) : bullet;
                        const remainder = firstSpace > 0 ? bullet.substring(firstSpace + 1) : '';
                        return (
                          <li key={`${track.heading}-${bulletIndex}`}>
                            <span className="keyword">{firstWord}</span>
                            {remainder && ` ${remainder}`}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div id="market-conviction" className="about-section market-proof about-market">
              <div className="about-section-header">
                <h3>Market Conviction</h3>
              </div>
              <div className="market-grid">
                {marketAngles.map((item) => (
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

export default About;
