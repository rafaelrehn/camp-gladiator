import { render, screen } from '@testing-library/react';
import { Header } from './Header';
test('renders learn react link', () => {
  render(<Header />);
  const heroHeader = screen.getByText(/TIME TO ROCK/i);
  const heroDescription = screen.getByText(/You are few more steps for the lorem ipsum dolor!/i);
  expect(heroHeader).toBeInTheDocument();
  expect(heroDescription).toBeInTheDocument();
});
  