import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Dice } from './Dice';

test('Dice value is between 1 and 6 when clicked', () => {
  //   expect(1).toBe(1);
  render(<Dice />);
  const button = screen.getByRole('button');
  const heading = screen.getByRole('heading');
  userEvent.click(button);
  // needed " heading.textContent ?? '0' " righthandside incase returned null
  const diceValue = parseInt(heading.textContent ?? '0', 10);
  // produces number between 1 and 6
  expect(diceValue).toBeGreaterThanOrEqual(1);
  expect(diceValue).toBeLessThanOrEqual(6);
});
