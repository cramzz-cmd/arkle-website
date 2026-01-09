import React from 'react';
import Team from '../components/Team';
import PageHero from '../components/PageHero';

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title={(
          <>
            The <span className="highlight">Execution Core</span>
          </>
        )}
        description="A multi-disciplinary crew spanning electrochemistry, thermal systems, manufacturing, and commercial delivery keeps every deployment on-rail."
        primaryCta={{ label: 'Discuss Opportunities', to: '/contact' }}
        secondaryCta={{ label: 'Learn About Us', to: '/about', variant: 'primary' }}
      />
      <Team />
    </>
  );
}

export default TeamPage;
