import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

type TokenState = 'VALIDATING' | 'VALID' | 'EXPIRED' | 'REVOKED' | 'ALREADY_ACCEPTED' | 'ALREADY_DECLINED' | 'WRONG_ACCOUNT';

interface InvitationData {
  organization: string;
  project?: string;
  run?: string;
  phase?: string;
  roleTitle: string;
  roleDescription: string;
  invitedBy: string;
  email: string;
}

export default function AcceptInvitation() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  const [tokenState, setTokenState] = useState<TokenState>('VALIDATING');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDeclineConfirm, setShowDeclineConfirm] = useState(false);
  
  // Mock data that would normally come from the backend after validating token
  const [invitationData, setInvitationData] = useState<InvitationData | null>(null);
  
  // Check if a user is currently signed in (mock)
  const isSignedIn = false;
  const currentSignedInEmail = 'suresh@company.com';

  useEffect(() => {
    const validateToken = async () => {
      setTokenState('VALIDATING');
      try {
        // Fake API request to validate token
        await new Promise(resolve => setTimeout(resolve, 800));
        
        if (!token) {
          setTokenState('EXPIRED');
          return;
        }

        // Mock reading specific test tokens
        if (token === 'expired') {
          setTokenState('EXPIRED');
          return;
        }
        if (token === 'revoked') {
          setTokenState('REVOKED');
          return;
        }
        if (token === 'accepted') {
          setTokenState('ALREADY_ACCEPTED');
          return;
        }
        
        const mockData: InvitationData = {
          organization: 'ABC Technologies',
          project: 'Graduate Talent Project',
          run: 'Apr 2027',
          phase: 'Build',
          roleTitle: 'Build Lead',
          roleDescription: 'Manage Build activities for this Run.',
          invitedBy: 'Priya Sharma',
          email: 'ravi@company.com'
        };

        setInvitationData(mockData);

        // Check if wrong account is signed in
        if (isSignedIn && currentSignedInEmail !== mockData.email) {
          setTokenState('WRONG_ACCOUNT');
          return;
        }

        setTokenState('VALID');
      } catch (err) {
        setTokenState('EXPIRED');
      }
    };

    validateToken();
  }, [token, isSignedIn]);

  const handleAccept = async () => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // If user has no account, route to set password
      if (!isSignedIn) {
        navigate('/set-password-invitation', { replace: true });
      } else {
        // Otherwise route to dashboard
        navigate('/dashboard', { replace: true });
      }
    } catch (err) {
      setIsSubmitting(false);
    }
  };

  const handleDecline = async () => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      setTokenState('ALREADY_DECLINED');
    } catch (err) {
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
      setShowDeclineConfirm(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-base text-ink-gray-9 font-sans">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 h-16 border-b border-outline-gray-1">
        <Link to="/" className="font-bold tracking-tight text-lg outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">OTTOBON</Link>
        <div className="flex items-center gap-4 text-sm">
          {!isSignedIn ? (
            <>
              <span className="hidden sm:inline text-ink-gray-6">Already have an account?</span>
              <Link to="/sign-in">
                <Button variant="ghost" className="font-semibold text-ink-gray-8">Sign In</Button>
              </Link>
            </>
          ) : (
            <span className="text-ink-gray-6 font-medium">Signed in as {currentSignedInEmail}</span>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-[440px] flex flex-col items-center">
          
          {tokenState === 'VALIDATING' && (
            <div className="text-center w-full">
              <div className="animate-pulse bg-outline-gray-2 h-4 w-32 rounded mx-auto mb-4" />
              <div className="animate-pulse bg-outline-gray-2 h-8 w-64 rounded mx-auto mb-8" />
              <div className="animate-pulse bg-outline-gray-2 h-96 w-full rounded" />
            </div>
          )}

          {tokenState === 'EXPIRED' && (
            <div className="w-full text-center">
              <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4 uppercase">
                Invitation
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3">
                This invitation has expired
              </h1>
              <p className="text-base text-ink-gray-6 mb-8 max-w-sm mx-auto">
                Ask the person who invited you to send a new invitation.
              </p>
              {!isSignedIn && (
                <Link to="/sign-in" className="w-full block">
                  <Button variant="solid" theme="gray" size="lg" className="w-full">Sign In</Button>
                </Link>
              )}
            </div>
          )}

          {tokenState === 'REVOKED' && (
            <div className="w-full text-center">
              <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4 uppercase">
                Invitation
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3">
                This invitation is no longer active
              </h1>
              <p className="text-base text-ink-gray-6 mb-8 max-w-sm mx-auto">
                The invitation may have been cancelled by the sender.
              </p>
            </div>
          )}

          {tokenState === 'ALREADY_ACCEPTED' && (
            <div className="w-full text-center">
              <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4 uppercase">
                Invitation
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3">
                This invitation has already been accepted.
              </h1>
              <Link to={isSignedIn ? "/dashboard" : "/sign-in"} className="w-full block mt-8">
                <Button variant="solid" theme="gray" size="lg" className="w-full">
                  {isSignedIn ? "Continue to Ottobon" : "Sign In"}
                </Button>
              </Link>
            </div>
          )}

          {tokenState === 'ALREADY_DECLINED' && (
            <div className="w-full text-center">
              <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4 uppercase">
                Invitation
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3">
                This invitation was declined.
              </h1>
            </div>
          )}

          {tokenState === 'WRONG_ACCOUNT' && invitationData && (
            <div className="w-full text-center">
              <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4 uppercase">
                Wrong Account
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-8">
                This invitation was sent to a different account.
              </h1>
              
              <div className="bg-surface-gray-1 border border-outline-gray-2 rounded-lg p-6 mb-8 text-left space-y-4">
                <div>
                  <div className="text-xs font-medium text-ink-gray-5 uppercase mb-1">Invitation email</div>
                  <div className="font-semibold text-ink-gray-9">{invitationData.email}</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-ink-gray-5 uppercase mb-1">Currently signed in</div>
                  <div className="font-semibold text-ink-gray-9">{currentSignedInEmail}</div>
                </div>
              </div>

              <Button variant="solid" theme="gray" size="lg" className="w-full">
                Switch account
              </Button>
            </div>
          )}

          {tokenState === 'VALID' && invitationData && (
            <div className="w-full">
              <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4 uppercase w-full text-center">
                You've been invited
              </div>
              
              <h1 className="text-3xl font-bold tracking-tight text-ink-gray-9 mb-3 w-full text-center">
                Join {invitationData.organization} on Ottobon
              </h1>
              
              <p className="text-base text-ink-gray-6 mb-8 w-full text-center">
                Review the invitation details before you continue.
              </p>

              {/* Invitation Summary Card */}
              <div className="border border-outline-gray-2 rounded-lg divide-y divide-outline-gray-2 mb-8 bg-surface-base">
                <div className="p-4 sm:p-5">
                  <div className="text-xs font-semibold text-ink-gray-5 uppercase mb-1 tracking-wider">Organization</div>
                  <div className="font-medium text-ink-gray-9">{invitationData.organization}</div>
                </div>

                {invitationData.project && (
                  <div className="p-4 sm:p-5">
                    <div className="text-xs font-semibold text-ink-gray-5 uppercase mb-1 tracking-wider">Project</div>
                    <div className="font-medium text-ink-gray-9">{invitationData.project}</div>
                  </div>
                )}

                {invitationData.run && (
                  <div className="p-4 sm:p-5">
                    <div className="text-xs font-semibold text-ink-gray-5 uppercase mb-1 tracking-wider">Project Run</div>
                    <div className="font-medium text-ink-gray-9">{invitationData.run}</div>
                  </div>
                )}

                {invitationData.phase && (
                  <div className="p-4 sm:p-5">
                    <div className="text-xs font-semibold text-ink-gray-5 uppercase mb-1 tracking-wider">Phase</div>
                    <div className="font-medium text-ink-gray-9">{invitationData.phase}</div>
                  </div>
                )}

                <div className="p-4 sm:p-5 bg-surface-gray-1">
                  <div className="text-xs font-semibold text-ink-gray-5 uppercase mb-1 tracking-wider">Your role</div>
                  <div className="font-medium text-ink-gray-9 mb-1">{invitationData.roleTitle}</div>
                  <div className="text-sm text-ink-gray-6">{invitationData.roleDescription}</div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="text-xs font-semibold text-ink-gray-5 uppercase mb-1 tracking-wider">Invited by</div>
                  <div className="font-medium text-ink-gray-9">{invitationData.invitedBy}</div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="text-xs font-semibold text-ink-gray-5 uppercase mb-1 tracking-wider">Invitation sent to</div>
                  <div className="font-medium text-ink-gray-9">{invitationData.email}</div>
                </div>
              </div>

              {!isSignedIn && (
                <div className="p-3 bg-blue-50 border border-blue-100 rounded-md text-blue-700 text-sm font-medium mb-6 text-center">
                  You'll create a password after accepting.
                </div>
              )}

              {/* Actions */}
              {!showDeclineConfirm ? (
                <div className="space-y-4">
                  <Button
                    onClick={handleAccept}
                    disabled={isSubmitting}
                    loading={isSubmitting}
                    variant="solid"
                    theme="gray"
                    size="lg"
                    className="w-full text-base"
                  >
                    Accept invitation
                  </Button>
                  <button
                    onClick={() => setShowDeclineConfirm(true)}
                    disabled={isSubmitting}
                    className="w-full text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 transition-colors py-2 outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded"
                  >
                    Decline invitation
                  </button>
                </div>
              ) : (
                <div className="border border-outline-gray-2 rounded-lg p-5 bg-surface-gray-1">
                  <h3 className="font-semibold text-ink-gray-9 mb-2">Decline this invitation?</h3>
                  <p className="text-sm text-ink-gray-6 mb-5">You won't receive access from this invitation.</p>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setShowDeclineConfirm(false)}
                      disabled={isSubmitting}
                    >
                      Cancel
                    </Button>
                    <Button 
                      variant="solid" 
                      theme="red"
                      className="flex-1"
                      onClick={handleDecline}
                      loading={isSubmitting}
                    >
                      Decline
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 flex items-center justify-center gap-4 text-xs text-ink-gray-5 border-t border-outline-gray-1 mt-auto">
        <a href="#" className="hover:text-ink-gray-8">Privacy</a>
        <span>&middot;</span>
        <a href="#" className="hover:text-ink-gray-8">Terms</a>
        <span>&middot;</span>
        <a href="#" className="hover:text-ink-gray-8">Help</a>
      </footer>
    </div>
  );
}
