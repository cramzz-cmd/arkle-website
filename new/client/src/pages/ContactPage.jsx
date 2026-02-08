import React from 'react';
import Contact from '../components/Contact';
import PageHero from '../components/PageHero';

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={(
          <>
            Let's <span className="highlight">Power Your Grid</span>
          </>
        )}
        description="Share your storage brief and we will tailor a vanadium flow battery program that hits uptime, safety, and circularity goals."
        primaryCta={{ label: 'Email Our Team', href: 'mailto:contact@arkleenergy.com' }}
        secondaryCta={{ label: 'View Technology Deck', to: '/technology', variant: 'primary' }}
      />
      <Contact />
    </>
  );
}

export default ContactPage;
