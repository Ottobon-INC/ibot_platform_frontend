import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PlatformEntry from './pages/PlatformEntry';
import SignIn from './pages/SignIn';
import CreateAccount from './pages/CreateAccount';
import RegistrationDetails from './pages/RegistrationDetails';
import EmailVerification from './pages/EmailVerification';
import SetPassword from './pages/SetPassword';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordSuccess from './pages/ResetPasswordSuccess';
import AcceptInvitation from './pages/AcceptInvitation';
import SetPasswordInvitation from './pages/SetPasswordInvitation';
import MfaSetup from './pages/MfaSetup';
import MfaVerification from './pages/MfaVerification';
import AccountUnderReview from './pages/AccountUnderReview';
import AccountSuspended from './pages/AccountSuspended';
import WorkspaceSelector from './pages/WorkspaceSelector';
import AccessDenied from './pages/AccessDenied';
import SessionExpired from './pages/SessionExpired';
import MyProfile from './pages/MyProfile';
import MyAccount from './pages/MyAccount';
import SecuritySettings from './pages/SecuritySettings';
import NotificationPreferences from './pages/NotificationPreferences';
import Dashboard from './pages/Dashboard';
import PlatformDashboard from './pages/admin/PlatformDashboard';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PlatformEntry />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password-success" element={<ResetPasswordSuccess />} />
        
        {/* Onboarding Flow */}
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/registration-details" element={<RegistrationDetails />} />
        
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/set-password" element={<SetPassword />} />
        
        {/* Invitation Flow */}
        <Route path="/accept-invitation" element={<AcceptInvitation />} />
        <Route path="/set-password-invitation" element={<SetPasswordInvitation />} />
        
        {/* MFA Flow */}
        <Route path="/mfa-setup" element={<MfaSetup />} />
        <Route path="/mfa-verification" element={<MfaVerification />} />
        
        {/* Exception / Holding States */}
        <Route path="/under-review" element={<AccountUnderReview />} />
        <Route path="/account-suspended" element={<AccountSuspended />} />
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="/session-expired" element={<SessionExpired />} />
        
        {/* Authenticated Dashboard / Workspaces / Profile / Account */}
        <Route path="/workspaces" element={<WorkspaceSelector />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/security" element={<SecuritySettings />} />
        <Route path="/notifications" element={<NotificationPreferences />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Platform Admin */}
        <Route path="/admin/dashboard" element={<PlatformDashboard />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
