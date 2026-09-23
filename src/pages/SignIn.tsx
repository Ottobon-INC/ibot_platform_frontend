import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const signInSchema = z.object({
  email: z.string().min(1, 'Enter your email address.').email('Enter a valid email address.'),
  password: z.string().min(1, 'Enter your password.'),
});

type SignInFormValues = z.infer<typeof signInSchema>;

export default function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: SignInFormValues) => {
    setGlobalError(null);
    try {
      const response = await fetch('http://localhost:3000/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email, password: data.password })
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      const result = await response.json();
      login(result.accessToken, result.user);
      
      navigate('/dashboard');
    } catch (err) {
      setGlobalError('Email or password is incorrect.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-base text-ink-gray-9 font-sans">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 h-16 border-b border-outline-gray-1">
        <Link to="/" className="font-bold tracking-tight text-lg outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">OTTOBON</Link>
        <div className="flex items-center gap-4 text-sm">
          <span className="hidden sm:inline text-ink-gray-6">New to Ottobon?</span>
          <Link to="/">
            <Button variant="ghost" className="font-semibold text-ink-gray-8">Create Account</Button>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-[440px] flex flex-col">
          
          <div className="text-xs font-semibold tracking-widest text-ink-gray-5 mb-4 text-center">
            WELCOME BACK
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-gray-9 mb-3 text-center">
            Sign in to Ottobon
          </h1>
          
          <p className="text-base text-ink-gray-6 mb-10 text-center">
            Use your registered email to continue.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full" noValidate>
            
            {globalError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm font-medium" role="alert">
                {globalError}
              </div>
            )}

            <Input
              label="Email address"
              type="email"
              autoComplete="email"
              placeholder="name@company.com"
              {...register('email')}
              error={errors.email?.message}
            />

            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="••••••••••••"
              {...register('password')}
              error={errors.password?.message}
              rightElement={
                <Link to="/forgot-password" tabIndex={-1} className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded">
                  Forgot password?
                </Link>
              }
            />
            
            <div className="flex justify-end -mt-4">
               <button
                type="button"
                className="text-sm font-medium text-ink-gray-6 hover:text-ink-gray-9 flex items-center gap-1.5 outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-1"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <Button
              type="submit"
              variant="solid"
              theme="gray"
              size="lg"
              className="w-full text-base"
              disabled={(!isValid && isDirty) || isSubmitting}
              loading={isSubmitting}
            >
              {isSubmitting ? 'Signing in…' : 'Sign In'}
            </Button>
          </form>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 flex flex-col items-center justify-center gap-2 text-sm text-ink-gray-5">
        <div className="flex gap-4">
          <a href="#" className="hover:text-ink-gray-8 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-1">Privacy</a>
          <span>&middot;</span>
          <a href="#" className="hover:text-ink-gray-8 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-1">Terms</a>
          <span>&middot;</span>
          <a href="#" className="hover:text-ink-gray-8 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ink-gray-9 rounded px-1">Help</a>
        </div>
      </footer>
    </div>
  );
}
