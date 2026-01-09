import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      initials: 'JR',
      name: 'Jeevith Reddy',
      role: 'Chief Executive Officer & Co-founder',
      bio: 'Commercial lead translating VRFB technology into utility and C&I partnerships with disciplined capital deployment.'
    },
    {
      initials: 'VL',
      name: 'Varad Manoj Latkar',
      role: 'Head of Stack Engineering',
      bio: 'Owns electrochemical stack design, balance-of-plant integration, and benchmark testing for 4-32 hour assets.'
    },
    {
      initials: 'AS',
      name: 'Aditya Singh',
      role: 'Director, Operations & Supply Chain',
      bio: 'Leads manufacturing readiness, QA protocols, and supplier partnerships across electrolyte, power electronics, and PCS.'
    },
    {
      initials: 'HK',
      name: 'Dr. Harun Khan',
      role: 'Principal Scientist',
      bio: 'Drives electrolyte chemistry innovation, durability testing, and data-backed validation of long-duration stacks.'
    },
    {
      initials: 'ET',
      name: 'Engineering & Test Team',
      role: 'Electrochemistry & Field Validation',
      bio: 'Cross-functional engineers executing prototyping, thermal management, commissioning, and grid compliance trials.'
    }
  ];

  const deliveryPillars = [
    {
      title: 'Commercial & Partnerships',
      description: 'Utility, IPP, and C&I relationships backed by structured service programs and bankable commercial models.'
    },
    {
      title: 'Engineering & Delivery',
      description: 'Stack design, thermal modelling, and balance-of-plant integration tuned for 4-32 hour operating windows.'
    },
    {
      title: 'Science & Validation',
      description: 'Electrolyte innovation, durability labs, and data science that underpin warranties and uptime promises.'
    }
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="team-header">
          <span className="section-label">Our Team</span>
          <h2 className="section-title">Operators building India&apos;s vanadium frontier</h2>
          <p className="lead-text">
            Arkle Energy combines commercial leaders, electrochemists, and delivery specialists who turn long-duration technology into
            dependable grid assets.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article key={member.name} className="team-card">
              <div className="team-initials" aria-hidden="true">{member.initials}</div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </article>
          ))}
        </div>

        <div className="team-footer">
          <div className="team-pillars">
            {deliveryPillars.map((pillar) => (
              <div key={pillar.title} className="team-pillar">
                <h4>{pillar.title}</h4>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
