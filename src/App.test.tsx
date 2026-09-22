import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders dashboard heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Dashboard/i })).toBeInTheDocument();
  });
  
  it('renders welcome message', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to IBOT/i)).toBeInTheDocument();
  });
});
