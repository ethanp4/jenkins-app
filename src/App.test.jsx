import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('displays exact text in p tag', () => {
    render(<App />);
    expect(screen.getByText(/This is Ethan Pelletier's jenkins App/i)).toBeInTheDocument();
  });
  it("displays exact text in h1 tag", () => {
    render(<App />);
    expect(screen.getByText(/TECH 2102 - Enterprise Computing/i)).toBeInTheDocument();
  });
});

