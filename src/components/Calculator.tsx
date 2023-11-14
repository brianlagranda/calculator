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

  const locale = 'en-US';
  const numberFormatOptions = { style: 'decimal' };

  const calculate = (prevResult: string, operator: string) => {
    let calculatedResult: number;

    console.log('Result: ', result);
    console.log('currentInput: ', currentInput);

    switch (operator) {
      case '+':
        calculatedResult = add(prevResult, currentInput);
        break;
      case '-':
        calculatedResult = subtract(prevResult, currentInput);
        break;
      case 'x':
        calculatedResult = multiply(prevResult, currentInput);
        break;
      case '/':
        calculatedResult = divide(prevResult, currentInput);
        break;
      default:
        calculatedResult = 0;
    }

    return calculatedResult.toLocaleString(locale, numberFormatOptions);
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
      const numericValue = parseFloat(currentInput.replace(/,/g, ''));

      let newValue;
      if (value === '.' && !currentInput.includes('.')) {
        newValue = `${numericValue}${value}`;
      } else if (value !== '.') {
        newValue = `${numericValue}${value}`;
      } else {
        newValue = `${numericValue}`;
      }

      const formattedValue = parseFloat(newValue).toLocaleString(
        locale,
        numberFormatOptions
      );
      setCurrentInput(formattedValue);
    }
  };

  const handleOperatorInput = (value: string) => {
    console.log('heree: ', operator);
    console.log('heree: ', value);
    console.log('heree result: ', result);
    if (currentInput !== '0') {
      setResult((prevResult) => calculate(prevResult, value));
      setHistorial(`${result === '0' ? currentInput : result} ${value}`);
      setCurrentInput('0');
    } else {
      setHistorial(`${currentInput} ${value}`);
      setCurrentInput('0');
    }
    setOperator(value);
  };

  const handleOtherInput = (value: string) => {
    if (value !== 'DEL' && value !== '=') {
    }
  };

  const handleEquals = (operator: string) => {
    console.log('operatoooor: ', operator);

    setResult((prevResult) => calculate(prevResult, operator));
    setCurrentInput('0');
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
        handleEquals(operator);
        break;
      default:
        break;
    }
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
