import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Router } from 'react-router-dom';
import { Content } from './Content';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));
describe('Content:', ()=>{
  test('should display header, main, footer component tag', () => {
    const { container } = render(<MemoryRouter><Content /></MemoryRouter>);  
    expect(container.getElementsByTagName("header").length).toBe(1)
    expect(container.getElementsByTagName("footer").length).toBe(1)
    expect(container.getElementsByTagName("Main").length).toBe(1)
  });

  test('should display WorkoutDetail component tag when location /workout/1', () => {
    const history = createMemoryHistory();
    history.push('/workout/1')
    const { container } = render(
      <Router location={history.location} navigator={history}>
        <Content />
      </Router>
    );      
    expect(container.getElementsByClassName("wokout__details").length).toBe(1) 
  });

  test('should render wrong path message when location /bad/route', () => {
    const history = createMemoryHistory();
    history.push('/bad/route')
    render(
      <Router location={history.location} navigator={history}>
        <Content />
      </Router>
    );      
    const linkElement = screen.getByText(/There's nothing here! Click to move back/i);
    expect(linkElement).toBeInTheDocument(); 
  });
})
  