import { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';

export default function Calculator() {
  const [input, setInput] = useState<string>('0');
  const [calculatedResult, setCalculatedResult] = useState<string>(0);

  const add = (a: number, b: number) => a + b;

  const multiply = (a: number, b: number) => a * b;

  const divide = (a: number, b: number) => a / b;

  const deleteLastChar = (input: string) => {
    setInput(input.slice(0, -1));
  };

  const resetInput = (input: string) => {
    setInput('0');
  };

  const handleClick = (value: string) => {
    if (input === '0') setInput(value);
    else {
      if (value === '.' || value in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
        setInput(input + value);

      switch (value) {
        case 'DEL':
          return deleteLastChar(input);
        case 'RESET':
          return resetInput(input);
        case '+':
          console.log(value);
          return add(input, value);
      }
    }
  };

  return (
    <>
      <Display result={input} />
      <Keypad onButtonClick={handleClick} />
    </>
  );
}

