import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import './PageHero.css';

const PageHero = ({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  stats
}) => {
  const renderCta = (cta, variant) => {
    if (!cta || !cta.label) {
      return null;
    }

    const resolvedVariant = cta.variant ?? variant;
    const className = resolvedVariant === 'secondary' ? 'btn btn-secondary' : 'btn btn-primary';

    if (cta.to) {
      return (
        <Link to={cta.to} className={className}>
          {cta.label}
        </Link>
      );
    }

    if (cta.href) {
      return (
        <a href={cta.href} className={className}>
          {cta.label}
        </a>
      );
    }

    return (
      <button type="button" className={className}>
        {cta.label}
      </button>
    );
  };

  return (
    <section className="hero page-hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            {eyebrow && <span className="page-hero-eyebrow">{eyebrow}</span>}
            {title && <h1 className="hero-title">{title}</h1>}
            {description && <p className="hero-subtitle page-hero-subtitle">{description}</p>}
            {(primaryCta || secondaryCta) && (
              <div className="hero-buttons">
                {renderCta(primaryCta, 'primary')}
                {renderCta(secondaryCta, 'secondary')}
              </div>
            )}
          </div>
        </div>
        {Array.isArray(stats) && stats.length > 0 && (
          <div className="page-hero-stats">
            {stats.map((stat, index) => (
              <div key={`${stat.label ?? 'stat'}-${index}`} className="page-hero-stat">
                <span className="stat-value">{stat.value}</span>
                {stat.label && <span className="stat-label">{stat.label}</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
