import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ReNovaRiskForm from './ReNovaRiskForm';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/screener" element={<ReNovaRiskForm />} />
      </Routes>
    </Router>
  );
}