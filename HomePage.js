import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', color: '#1e3a8a' }}>ReNova</h1>
      <p style={{ marginBottom: '1rem' }}>Empowering Financial Resilience in the Longevity Economy</p>
      <h2 style={{ fontSize: '1.5rem', color: '#1e40af' }}>Future-Proof Your Financial Health</h2>
      <p>ReNova helps identify and overcome age-related financial vulnerabilities using AI-driven insights.</p>
      <button
        onClick={() => navigate('/screener')}
        style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
      >
        Start Your Resilience Check
      </button>
    </div>
  );
}