import React, { useState } from 'react';

export default function ReNovaRiskForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>AI Risk Screener</h2>
      {!submitted ? (
        <button onClick={() => setSubmitted(true)}>Submit Assessment</button>
      ) : (
        <p>Thank you for submitting! Your results will appear here.</p>
      )}
    </div>
  );
}