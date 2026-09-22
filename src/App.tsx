import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PlatformEntry from './pages/PlatformEntry';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlatformEntry />} />
        {/* Placeholder for create-account */}
        <Route path="/create-account" element={<div className="p-10 font-bold">Create Account Page Placeholder</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
