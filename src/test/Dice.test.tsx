import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Dice } from '../Dice';

test('Dice value is between 1 and 6 when clicked', () => {
  render(<Dice />);
  const button = screen.getByRole('button');
  const heading = screen.getByRole('heading');
  userEvent.click(button);
  // return value parsing '0' if null
  const diceValue = parseInt(heading.textContent ?? '0', 10);
  // produces number between 1 and 6
  expect(diceValue).toBeGreaterThanOrEqual(1);
  expect(diceValue).toBeLessThanOrEqual(6);
});
