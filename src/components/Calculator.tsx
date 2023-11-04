import { useState, useEffect } from 'react';
import Display from './Display';
import Keypad from './Keypad';

export default function Calculator() {
  const [prevInput, setPrevInput] = useState<string>('');
  const [currentInput, setCurrentInput] = useState<string>('');
  const [operator, setOperator] = useState<string | null>(null);
  const [calculatedResult, setCalculatedResult] = useState<string>('0');
  const [record, setRecord] = useState<string[]>([]);

  const operators: string[] = ['+', '-', 'x', '/'];

  const add = (a: string, b: string): number => Number(a) + Number(b);

  const subtract = (a: string, b: string): number => Number(a) - Number(b);

  const multiply = (a: string, b: string): number => Number(a) * Number(b);

  const divide = (a: string, b: string): number => Number(a) / Number(b);

  const equals = (
    calculatedResult: string,
    currentInput: string,
    record: string[]
  ) => {
    console.log('Calcu: ', calculatedResult, 'curr: ', currentInput);
    switch (operator) {
      case '+':
        return setCalculatedResult(String(add(calculatedResult, currentInput)));
      case '-':
        return setCalculatedResult(
          String(subtract(calculatedResult, currentInput))
        );
      case '+':
        return setCalculatedResult(
          String(multiply(calculatedResult, currentInput))
        );
      case '-':
        return setCalculatedResult(
          String(divide(calculatedResult, currentInput))
        );
    }
    console.log('calculatedResult Inside:', calculatedResult);
  };

  const deleteLastChar = (input: string) => {
    return setInput(input.slice(0, -1));
  };

  const clearAll = () => {
    setInput('');
    setPrevInput('');
    setCurrentInput('0');
    setOperator(null);
    setCalculatedResult('0');
  };

  const handleClick = (value: string) => {
    if (value >= '0' && value <= '9') {
      setCurrentInput((currentInput) => currentInput + value);
    } else {
      const lastInput = record[record.length - 1];
      if (operators.includes(value) && currentInput !== '') {
        setPrevInput(currentInput);
        setRecord((record) => [...record, currentInput, value]);
        setOperator(value);
        setCurrentInput('');
      } else if (lastInput !== currentInput) {
        setRecord((record) => [...record, currentInput]);
      }
    }

    switch (value) {
      case 'DEL':
        return deleteLastChar(currentInput);
      case 'RESET':
        return clearAll();
      case '+':
        return setCalculatedResult(String(add(calculatedResult, currentInput)));
      case '-':
        return setCalculatedResult(
          String(subtract(calculatedResult, currentInput))
        );
      case '+':
        return setCalculatedResult(
          String(multiply(calculatedResult, currentInput))
        );
      case '-':
        return setCalculatedResult(
          String(divide(calculatedResult, currentInput))
        );
      case '=':
        return equals(calculatedResult, currentInput, record);
    }
  };

  console.log(record);
  console.log(prevInput);
  console.log(currentInput);
  console.log('calculatedResult Outside:', calculatedResult);

  return (
    <>
      <Display result={currentInput} />
      <Keypad onButtonClick={handleClick} />
    </>
  );
}

