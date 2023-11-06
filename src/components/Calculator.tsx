import { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';

export default function Calculator() {
  const [prevInput, setPrevInput] = useState<string>('');
  const [currentInput, setCurrentInput] = useState<string>('');
  const [operator, setOperator] = useState<string>('');
  const [calculatedResult, setCalculatedResult] = useState<string>('');
  const [record, setRecord] = useState<string[]>([]);

  const operators: string[] = ['+', '-', 'x', '/'];

  const deleteLastChar = (input: string) => {
    return setCurrentInput(input.slice(0, -1));
  };

  const clearAll = () => {
    setPrevInput('');
    setCurrentInput('');
    setOperator('');
    setCalculatedResult('');
    setRecord([]);
  };

  const add = (a: string, b: string): number => Number(a) + Number(b);

  const subtract = (a: string, b: string): number => Number(a) - Number(b);

  const multiply = (a: string, b: string): number => Number(a) * Number(b);

  const divide = (a: string, b: string): number => Number(a) / Number(b);

  const calculate = (a: string, operator: string, b: string) => {
    let result: Number = 0;
    console.log('operador: ', operator);

    switch (operator) {
      case '+':
        result = add(a, b);
        break;
      case '-':
        result = subtract(a, b);
        break;
      case 'x':
        result = multiply(a, b);
        break;
      case '/':
        result = divide(a, b);
        break;
      default:
        return a;
    }

    setCalculatedResult(String(result));
  };

  const handleClick = (value: string) => {
    if (value >= '0' && value <= '9') {
      setCurrentInput((currentInput) => currentInput + value);
    } else if (currentInput !== '' && operators.includes(value)) {
      setPrevInput(currentInput);
      setRecord((record) => [...record, currentInput, value]);
      setOperator(value);
      setCurrentInput('');
    }

    switch (value) {
      case 'DEL':
        return deleteLastChar(currentInput);
      case 'RESET':
        return clearAll();
      case '=':
        if (currentInput !== '')
          setRecord((record) => [...record, currentInput]);
        calculatedResult === ''
          ? calculate(prevInput, operator, currentInput)
          : calculate(calculatedResult, operator, currentInput);
    }
  };

  console.log('record: ', record);
  console.log('prevInput: ', prevInput);
  console.log('currentInput: ', currentInput);
  console.log('calculatedResult Outside:', calculatedResult);

  return (
    <>
      <Display result={currentInput === '' ? calculatedResult : currentInput} />
      <Keypad onButtonClick={handleClick} />
    </>
  );
}

