import { fireEvent, render, screen } from '@testing-library/react';
import { WorkoutService } from '../../../service/workout.service';
import { WorkoutDetail } from './WorkoutDetail';

const mockedUsedNavigate = jest.fn();
let mockUsedParams = {};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
  useParams: () => mockUsedParams
}));

describe('WorkoutDetail:', ()=>{
  test('should display workout__details class when workoutId valid', ()=>{
    mockUsedParams = ({workoutId: "1"});
    const { container } = render(<WorkoutDetail />);
    expect(container.getElementsByClassName("wokout__details").length).toBe(1); 
    expect(container.getElementsByClassName("no__workout__msg").length).toBe(0); 
    expect(container.getElementsByTagName("video").length).toBe(1)
  })

  test('should not display workout__details class when workoutId invalid', ()=>{
    mockUsedParams = ({workoutId: "1123123"})
    const { container } = render(<WorkoutDetail />);
    const linkElement = screen.getByText(/No workout found please click in the 'Back' button below/i);
    expect(linkElement).toBeInTheDocument();
    expect(container.getElementsByClassName("wokout__details").length).toBe(0); 
  })

  test('should navigate to root level on button click', () => {
    render(<WorkoutDetail />);
    const button = screen.getByRole("button")
    fireEvent.click(button) 
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/")
  });
})
  