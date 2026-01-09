import React from 'react';
import Mission from '../components/Mission';
import PageHero from '../components/PageHero';

function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission"
        title={(
          <>
            Our <span className="highlight">Long-Duration Mandate</span>
          </>
        )}
        description="We are here to unlock 4–32 hour storage that keeps renewable-heavy grids stable, circular, and bankable for decades."
        primaryCta={{ label: 'Review Our Technology', to: '/technology' }}
        secondaryCta={{ label: 'Partner With Us', to: '/contact', variant: 'primary' }}
        stats={[
          { value: '6-32 hr', label: 'Dispatch Window' },
          { value: '0%', label: 'Capacity Fade' },
          { value: '25+ yr', label: 'Asset Life' }
        ]}
      />
      <Mission />
    </>
  );
}

export default MissionPage;
