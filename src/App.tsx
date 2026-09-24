import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
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
import OrganizationsList from './pages/admin/OrganizationsList';
import OrganizationReviewQueue from './pages/admin/OrganizationReviewQueue';
import OrganizationReviewDetail from './pages/admin/OrganizationReviewDetail';
import OrganizationDetail from './pages/admin/OrganizationDetail';
import OrganizationAccessManagement from './pages/admin/OrganizationAccessManagement';
import OrganizationActivity from './pages/admin/OrganizationActivity';
import PlatformProjectsList from './pages/admin/PlatformProjectsList';
import OrganizationDashboard from './pages/organization/OrganizationDashboard';
import OrganizationProjectsList from './pages/organization/OrganizationProjectsList';
import CreateProject from './pages/organization/CreateProject';
import OrganizationProjectDetail from './pages/organization/OrganizationProjectDetail';
import SelectRunStartingPoint from './pages/organization/SelectRunStartingPoint';
import CopyPreviousRun from './pages/organization/CopyPreviousRun';
import OrganizationRunsList from './pages/organization/OrganizationRunsList';
import ScrollToTop from './components/ScrollToTop';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

function AdminRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  // Check if user belongs to OTTOBON workspace
  const isPlatformAdmin = user?.workspaces?.some(w => w.workspaceType === 'OTTOBON');
  
  if (!isPlatformAdmin) {
    return <Navigate to="/access-denied" replace />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <AuthProvider>
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
          <Route path="/workspaces" element={<ProtectedRoute><WorkspaceSelector /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />
          <Route path="/account" element={<ProtectedRoute><MyAccount /></ProtectedRoute>} />
          <Route path="/security" element={<ProtectedRoute><SecuritySettings /></ProtectedRoute>} />
          <Route path="/notifications" element={<ProtectedRoute><NotificationPreferences /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

          {/* Organization Workspace */}
          <Route path="/org/dashboard" element={<ProtectedRoute><OrganizationDashboard /></ProtectedRoute>} />
          <Route path="/org/projects" element={<ProtectedRoute><OrganizationProjectsList /></ProtectedRoute>} />
          <Route path="/org/projects/create" element={<ProtectedRoute><CreateProject /></ProtectedRoute>} />
          <Route path="/org/projects/:id" element={<ProtectedRoute><OrganizationProjectDetail /></ProtectedRoute>} />
          <Route path="/org/projects/:id/runs/create" element={<ProtectedRoute><SelectRunStartingPoint /></ProtectedRoute>} />
          <Route path="/org/projects/:id/runs/create/copy-previous" element={<ProtectedRoute><CopyPreviousRun /></ProtectedRoute>} />
          <Route path="/org/runs" element={<ProtectedRoute><OrganizationRunsList /></ProtectedRoute>} />
          <Route path="/org/team" element={<ProtectedRoute><OrganizationDashboard /></ProtectedRoute>} />
          <Route path="/org/approvals" element={<ProtectedRoute><OrganizationDashboard /></ProtectedRoute>} />
          <Route path="/org/commercials" element={<ProtectedRoute><OrganizationDashboard /></ProtectedRoute>} />
          <Route path="/org/billing" element={<ProtectedRoute><OrganizationDashboard /></ProtectedRoute>} />
          <Route path="/org/reports" element={<ProtectedRoute><OrganizationDashboard /></ProtectedRoute>} />
          <Route path="/org/activity" element={<ProtectedRoute><OrganizationDashboard /></ProtectedRoute>} />
          <Route path="/org/settings" element={<ProtectedRoute><OrganizationDashboard /></ProtectedRoute>} />

          {/* Platform Admin */}
          <Route path="/admin/dashboard" element={<AdminRoute><PlatformDashboard /></AdminRoute>} />
          <Route path="/admin/organizations" element={<AdminRoute><OrganizationsList /></AdminRoute>} />
          <Route path="/admin/organizations/reviews" element={<AdminRoute><OrganizationReviewQueue /></AdminRoute>} />
          <Route path="/admin/organizations/reviews/:id" element={<AdminRoute><OrganizationReviewDetail /></AdminRoute>} />
          <Route path="/admin/organizations/:id" element={<AdminRoute><OrganizationDetail /></AdminRoute>} />
          <Route path="/admin/organizations/:id/access" element={<AdminRoute><OrganizationAccessManagement /></AdminRoute>} />
          <Route path="/admin/organizations/:id/activity" element={<AdminRoute><OrganizationActivity /></AdminRoute>} />
          
          {/* Admin - Projects */}
          <Route path="/admin/projects" element={<AdminRoute><PlatformProjectsList /></AdminRoute>} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
