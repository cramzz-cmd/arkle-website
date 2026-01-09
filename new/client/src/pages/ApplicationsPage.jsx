import React from 'react';
import PageHero from '../components/PageHero';
import Applications from '../components/Applications';

function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title={(
          <>
            Flow Battery <span className="highlight">Use Cases</span>
          </>
        )}
        description="See how Arkle VRFB systems unlock reliable, long-duration power across generation, grid operations, industry, and remote sites."
        primaryCta={{ label: 'Discuss Your Project', to: '/contact' }}
        secondaryCta={{ label: 'Explore Technology', to: '/technology', variant: 'primary' }}
        stats={[
          { value: '5', label: 'Core Sectors' },
          { value: '20k+', label: 'Cycle Life Ready' },
          { value: '0%', label: 'Degradation' }
        ]}
      />
      <Applications />
    </>
  );
}

export default ApplicationsPage;
