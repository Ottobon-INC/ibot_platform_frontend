import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PlatformEntry from './pages/PlatformEntry';
import SignIn from './pages/SignIn';
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlatformEntry />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        {/* Placeholder for registration-details */}
        <Route path="/registration-details" element={<div className="p-10 font-bold">Registration Details Placeholder</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
