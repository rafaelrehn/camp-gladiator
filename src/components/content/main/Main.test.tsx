import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Main } from './Main';
import { WorkoutService } from '../../../service/workout.service'

describe('Main:', ()=>{

  let workoutService: WorkoutService

  beforeAll(()=>{
    workoutService = new WorkoutService()
  }) 
  test('should render Main', () => {  
    const { container } = render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    const elements = container.getElementsByClassName("main")
    expect(elements.length).toBe(1)
  });

  test('should render card__list class element', () => {
    const { container } = render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    const elements = container.getElementsByClassName("card__list")
    expect(elements.length).toBe(1)
  });

  test('should not render card__list class element', () => { 
    jest.spyOn(WorkoutService.prototype, 'getWorkoutsList')
    .mockImplementation(() => {
      return []
    });
    const { container } = render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    const elements = container.getElementsByClassName("card__list")
    expect(elements.length).toBe(0)
  });
})
  