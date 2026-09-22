import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PlatformEntry from './pages/PlatformEntry';
import SignIn from './pages/SignIn';
import CreateAccount from './pages/CreateAccount';
import RegistrationDetails from './pages/RegistrationDetails';
import Dashboard from './pages/Dashboard';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PlatformEntry />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/registration-details" element={<RegistrationDetails />} />
        
        {/* Placeholder for email-verification (Page 5) */}
        <Route path="/email-verification" element={<div className="p-10 font-bold">Email Verification Placeholder (Page 5)</div>} />
        
        {/* Authenticated Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
