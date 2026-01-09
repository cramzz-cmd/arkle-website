import React from 'react';
import LocationsMap from '../components/LocationsMap';
import PageHero from '../components/PageHero';

function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title={(
          <>
            Grid-Scale <span className="highlight">Coverage</span>
          </>
        )}
        description="From remote microgrids to utility pilots, Arkle systems are energising critical sites across India’s priority states."
        primaryCta={{ label: 'Book A Site Walkthrough', to: '/contact' }}
        secondaryCta={{ label: 'Meet Deployment Team', to: '/team', variant: 'primary' }}
      />
      <LocationsMap />
    </>
  );
}

export default LocationsPage;
