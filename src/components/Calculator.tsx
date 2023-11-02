import { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';

export default function Calculator() {
  const [input, setInput] = useState<string>('');
  const [currentInput, setCurrentInput] = useState<string>('');
  const [PrevInput, setPrevInput] = useState<string>('');
  const [operator, setOperator] = useState<string | null>(null);
  const [calculatedResult, setCalculatedResult] = useState<string>('0');

  const add = (a: string, b: string): number => Number(a + b);

  const subtract = (a: string, b: string): number => Number(a - b);

  const multiply = (a: string, b: string): number => Number(a * b);

  const divide = (a: string, b: string): number => Number(a / b);

  const deleteLastChar = (calculatedResult: string) => {
    return setCalculatedResult(calculatedResult.slice(0, -1));
  };

  const clearAll = () => {
    setPrevInput('');
    setCurrentInput('0');
    setOperator(null);
    setCalculatedResult('0');
  };

  const handleClick = (value: string) => {
    if (value >= '0' && value <= '9') {
      setInput(input + value);
    } else {
      setOperator(value);
      setPrevInput(input);
    }
  };

  return (
    <>
      <Display result={input} />
      <Keypad onButtonClick={handleClick} />
    </>
  );
}

/*     switch (operator) {
      case 'DEL':
        return deleteLastChar(calculatedResult);
      case 'RESET':
        return clearAll();
      case '+':
        return add(PrevInput, currentInput);
      case '-':
        return subtract(PrevInput, currentInput);
      case '/':
        return divide(PrevInput, currentInput);
      case 'x':
        return multiply(PrevInput, currentInput);
      case '=':
        return alert('hi');
    } */

