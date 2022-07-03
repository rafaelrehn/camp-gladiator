import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Workouts } from '../../../mock/workouts';
import { Card } from './Card';

describe('Card:', ()=>{
  test('Should Render card element', () => {
    const { container } = render(<MemoryRouter><Card workout={Workouts[0]}/></MemoryRouter>);
    expect(container.getElementsByClassName('card').length).toBe(1)
  });
})
  