import React from 'react';
import Technology from '../components/Technology';
import PageHero from '../components/PageHero';

function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title={(
          <>
            Energy Solutions <span className="highlight">Beyond Sustainable</span>
          </>
        )}
        description="In-house redox flow systems decouple power and energy, delivering 25+ years of safe, zero-degradation storage for critical infrastructure."
        primaryCta={{ label: 'Talk To A Specialist', to: '/contact' }}
        stats={[
          { value: '25+ yr', label: 'Operational Life' },
          { value: '0%', label: 'Capacity Degradation' },
          { value: '32 hr', label: 'Dispatch Duration' }
        ]}
      />
      <Technology />
    </>
  );
}

export default TechnologyPage;
