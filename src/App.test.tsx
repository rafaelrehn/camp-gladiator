import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App:', ()=>{
  test('Render react app', () => {
    const { container } = render(<MemoryRouter><App /></MemoryRouter>);
    expect(container.getElementsByClassName("app").length).toBe(1)
  });
})
