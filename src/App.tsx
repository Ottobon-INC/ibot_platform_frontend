import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PlatformEntry from './pages/PlatformEntry';
import SignIn from './pages/SignIn';
import CreateAccount from './pages/CreateAccount';
import RegistrationDetails from './pages/RegistrationDetails';
import EmailVerification from './pages/EmailVerification';
import SetPassword from './pages/SetPassword';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PlatformEntry />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Onboarding Flow */}
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/registration-details" element={<RegistrationDetails />} />
        
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/set-password" element={<SetPassword />} />
        
        {/* Authenticated Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
