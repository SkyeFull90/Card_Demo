import { render, screen } from '@testing-library/react';
import App from './App';

test('finds Hello React', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello React/i);
  expect(linkElement).toBeInTheDocument();
});
