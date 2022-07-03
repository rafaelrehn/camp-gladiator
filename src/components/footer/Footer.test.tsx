import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer:', ()=>{
  test('Should Render footer element', () => {
    render(<Footer />);
    const linkElement = screen.getByText(/Camp Gladiator/i);
    expect(linkElement).toBeInTheDocument();
  });
})
  