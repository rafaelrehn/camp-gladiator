import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Workouts } from '../../../mock/workouts';
import { CardList } from './CardList';

describe('CardList:', ()=>{
  test('Should Render card__list element', () => {
    const { container } = render(<MemoryRouter><CardList workouts={Workouts}/></MemoryRouter>);
    expect(container.getElementsByClassName('card__list').length).toBe(1)
    expect(container.getElementsByClassName('card').length).toBe(Workouts.length)
  });
})
  