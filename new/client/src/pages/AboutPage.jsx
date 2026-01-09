import React from 'react';
import About from '../components/About';
import PageHero from '../components/PageHero';

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who Are We"
        title={(
          <>
            Inside <span className="highlight">Arkle Energy</span>
          </>
        )}
        description="We don’t just store energy; we solve the durability crisis with long-duration vanadium flow systems that stay safe and bankable for decades."
        primaryCta={{ label: 'Explore Capabilities', href: '#capabilities' }}
        stats={[
          { value: '25+ yr', label: 'Asset Life' },
          { value: '0%', label: 'Capacity Fade' },
          { value: '60%', label: 'Electrolyte Residual Value' }
        ]}
      />
      <About />
    </>
  );
}

export default AboutPage;
