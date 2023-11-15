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
  const [historial, setHistorial] = useState<string>('');

  const OPERATORS: string[] = ['+', '-', 'x', '/'];
  const NUMBERS: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // const locale = 'en-US';
  // const numberFormatOptions = { style: 'decimal' };

  const calculate = (operator: string) => {
    let calculatedResult: number;

    console.log('Result: ', result);
    console.log('currentInput: ', currentInput);

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
        const divisor = currentInput;
        if (divisor !== '0') {
          calculatedResult = divide(result, currentInput);
        } else {
          alert(`You can't divide by zero`);
          calculatedResult = Number(result);
        }
        break;
      default:
        calculatedResult = 0;
    }

    return String(calculatedResult);
  };

  const handleClick = (value: string) => {
    if (value === '0' && currentInput === '0') return;

    if (NUMBERS.includes(value) || value === '.') {
      handleNumericInput(value);
    } else if (OPERATORS.includes(value)) {
      handleOperatorInput(value);
    } else {
      handleOtherInput(value);
    }

    handleSpecialInputs(value);
  };

  const handleNumericInput = (value: string) => {
    if (currentInput === '0') {
      setCurrentInput(value);
    } else if (currentInput.length < 21) {
      //const numericValue = parseFloat(currentInput.replace(/,/g, ''));

      let newValue;

      if (value === '.' && !currentInput.includes('.')) {
        newValue = `${currentInput}${value}`;
      } else if (value !== '.') {
        newValue = `${currentInput}${value}`;
      } else {
        newValue = currentInput;
      }

      setCurrentInput(newValue);
    }
  };

  const handleOperatorInput = (value: string) => {
    if (operator === '') {
      setResult(currentInput);
      setHistorial(`${currentInput} ${value}`);
    } else if (currentInput === '0') {
      setHistorial(`${result} ${value}`);
    } else {
      setResult(calculate(operator));
      setHistorial(`${result} ${value}`);
    }
    setOperator(value);
    setCurrentInput('0');
  };

  const handleOtherInput = (value: string) => {
    if (value !== 'DEL' && value !== '=') {
      console.log('other output');
    }
  };

  const handleSpecialInputs = (value: string) => {
    switch (value) {
      case 'DEL':
        deleteLastChar(currentInput);
        break;
      case 'RESET':
        clearAll();
        break;
      case '=':
        handleEquals(value);
        break;
      default:
        break;
    }
  };

  const handleEquals = (value: string) => {
    operator === ''
      ? setHistorial(`${result} ${value}`)
      : setHistorial(`${result} ${operator} ${currentInput} ${value}`);
    setResult(calculate(operator));
  };

  const deleteLastChar = (input: string) => {
    if (input.charAt(input.length - 2) === ',') {
      setCurrentInput(input.slice(0, -2));
    } else {
      input.length === 1
        ? setCurrentInput('0')
        : setCurrentInput(input.slice(0, -1));
    }
  };

  const clearAll = () => {
    setCurrentInput('0');
    setOperator('');
    setResult('0');
    setHistorial('');
  };

  return (
    <>
      <Display
        result={currentInput === '0' ? result : currentInput}
        historial={historial}
      />
      <Keypad onButtonClick={handleClick} />
    </>
  );
}
