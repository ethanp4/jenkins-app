import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the app component', () => {
    render(<App />);
    expect(screen.getByText(/This is my Ethan Pelletier's jenkins App/i)).toBeInTheDocument();
  });
});