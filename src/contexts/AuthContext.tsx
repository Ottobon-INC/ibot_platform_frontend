import React, { createContext, useContext, useState, useEffect } from 'react';

interface WorkspaceMembership {
  workspaceId: string;
  workspaceType: string;
  organizationId?: string;
  organizationStatus?: string;
  organizationName?: string;
  organizationType?: string;
}

interface User {
  id: string;
  email: string;
  displayName?: string;
  workspaces?: WorkspaceMembership[];
}

interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  login: (accessToken: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Note: In a production app, you might try to refresh the token on mount here
  // using an HttpOnly cookie if one exists.
  useEffect(() => {
    // Check localStorage or memory
    const storedToken = localStorage.getItem('ibot_access_token');
    const storedUser = localStorage.getItem('ibot_user');
    
    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setAccessToken(storedToken);
        setUser(parsedUser);
      } catch (err) {
        console.error('Failed to parse stored user', err);
        localStorage.removeItem('ibot_access_token');
        localStorage.removeItem('ibot_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (token: string, userData: User) => {
    setAccessToken(token);
    setUser(userData);
    localStorage.setItem('ibot_access_token', token);
    localStorage.setItem('ibot_user', JSON.stringify(userData));
  };

  const logout = () => {
    setAccessToken(null);
    setUser(null);
    localStorage.removeItem('ibot_access_token');
    localStorage.removeItem('ibot_user');
    
    // Attempt to clear backend cookie
    fetch('http://localhost:3000/v1/auth/logout', { method: 'POST', credentials: 'include' }).catch(console.error);
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-surface-gray-1 text-ink-gray-9">Loading session...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, accessToken, isAuthenticated: !!accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
