import { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';

const add = (a: string, b: string) => Number(a) + Number(b);
const subtract = (a: string, b: string) => Number(a) - Number(b);
const multiply = (a: string, b: string) => Number(a) * Number(b);
const divide = (a: string, b: string) => Number(a) / Number(b);

export default function Calculator() {
  const [currentInput, setCurrentInput] = useState<string>('0');
  const [operator, setOperator] = useState<string>('');
  const [result, setResult] = useState<string>('0');
  const [record, setRecord] = useState<string[]>([]);

  const OPERATORS: string[] = ['+', '-', 'x', '/'];
  const NUMBERS: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const calculate = (operator: string) => {
    let calculatedResult: number;

    switch (operator) {
      case '+':
        calculatedResult = add(result, currentInput);
        break;
      case '-':
        calculatedResult = subtract(result, currentInput);
        break;
      case 'x':
        calculatedResult = multiply(result, currentInput);
        break;
      case '/':
        calculatedResult = divide(result, currentInput);
        break;
      default:
        calculatedResult = 0;
    }

    return String(calculatedResult);
  };

  const deleteLastChar = (input: string) => {
    return setCurrentInput(input.slice(0, -1));
  };

  const clearAll = () => {
    setCurrentInput('0');
    setOperator('');
    setResult('0');
    setRecord([]);
  };

  const handleClick = (value: string) => {
    if (value === '0' && currentInput === '0') return;
    if (currentInput === '0' && OPERATORS.includes(value)) setOperator(value);

    if (
      NUMBERS.includes(value) ||
      (value === '.' && !currentInput.includes(value))
    ) {
      if (currentInput === '0' && value !== '.') {
        setCurrentInput(value);
      } else {
        setCurrentInput((currentInput) => currentInput + value);
      }
    } else if (currentInput !== '0' && OPERATORS.includes(value)) {
      setOperator(value);
      operator === ''
        ? setResult(calculate(value))
        : setResult(calculate(operator));
      setCurrentInput('0');
    } else {
      if (value !== 'DEL' && value !== '=') {
        setRecord((record) => [...record.slice(0, -1), value]);
      }
    }

    switch (value) {
      case 'DEL':
        return deleteLastChar(currentInput);
      case 'RESET':
        return clearAll();
      case '=':
        setResult(calculate(operator));
        setCurrentInput('0');
    }
  };

  return (
    <>
      <Display result={currentInput === '0' ? result : currentInput} />
      <Keypad onButtonClick={handleClick} />
    </>
  );
}
