import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });

  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

  const contactDetails = [
    {
      icon: '🏭',
      title: 'Bengaluru Operations Hub',
      description: 'HSR Layout, Bengaluru, Karnataka 560102, India',
      meta: 'Manufacturing, lab, and command centre'
    },
    {
      icon: '✉️',
      title: 'Email',
      description: 'info@arkleenergy.com'
    }
  ];

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '/api').replace(/\/$/, '');
      const response = await axios.post(`${apiBaseUrl}/contact`, formData);

      if (response.data.success) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', company: '', interest: '', message: '' });

        setTimeout(() => {
          setStatus({ submitting: false, submitted: false, error: null });
        }, 5000);
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: error.response?.data?.message || 'An error occurred. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let&apos;s configure long-duration storage together</h2>
          <p className="lead-text">
            Ready to scope a pilot, run diligence, or explore partnerships? Our team responds within one business day with the
            right experts across technology, delivery, and financing.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Talk with our team</h3>
            <p>
              Drop us a note or reach out directly using the channels below. We tailor every response to your project scope and
              operating requirements.
            </p>
            <div className="info-items">
              {contactDetails.map((item) => (
                <div key={item.title} className="info-item">
                  <span className="info-icon" aria-hidden="true">{item.icon}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    {item.meta && <span className="info-meta">{item.meta}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form">
            <h3>Send us a message</h3>
            <p className="form-lead">Share a few details and we&apos;ll align the right specialists for your discovery call.</p>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Organisation"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="interest">Area of interest</label>
                  <select id="interest" value={formData.interest} onChange={handleChange}>
                    <option value="">Select option</option>
                    <option value="product">Product information</option>
                    <option value="partnership">Partnership opportunities</option>
                    <option value="investment">Investment inquiries</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Share context for your request"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full" disabled={status.submitting}>
                {status.submitting ? 'Sending…' : 'Send message'}
              </button>
              {status.submitted && (
                <div className="status-message success">Thank you for your message! We will get back to you soon.</div>
              )}
              {status.error && <div className="status-message error">{status.error}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
