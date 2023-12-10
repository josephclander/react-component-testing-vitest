import { useState } from 'react';
// import './App.css'

export const Dice = () => {
  const [dice, rollDice] = useState<number>(1);

  const roll = () => {
    rollDice(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <>
      <h1 className="dice">{dice}</h1>
      <button onClick={roll}>Roll!</button>
    </>
  );
};
