import { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';

export default function Calculator() {
  const [prevInput, setPrevInput] = useState<string>('');
  const [currentInput, setCurrentInput] = useState<string>('');
  const [operator, setOperator] = useState<string>('');
  const [result, setResult] = useState<string>('0');
  const [record, setRecord] = useState<string[]>([]);

  const operators: string[] = ['+', '-', 'x', '/'];

  const add = (a: string, b: string) => Number(a) + Number(b);

  const substract = (a: string, b: string) => Number(a) - Number(b);

  const multiply = (a: string, b: string) => Number(a) * Number(b);

  const divide = (a: string, b: string) => Number(a) / Number(b);

  const calculate = () => {
    let calculatedResult: number;
    switch (operator) {
      case '+':
        calculatedResult = Number(result) + Number(currentInput);
        break;
      case '-':
        calculatedResult = Number(result) - Number(currentInput);
        break;
      case 'x':
        calculatedResult = Number(result) * Number(currentInput);
        break;
      case '/':
        calculatedResult = Number(result) / Number(currentInput);
        break;
      default:
        calculatedResult = 0;
    }
    console.log('calculatedResult inside: ', calculatedResult);
    setResult(String(calculatedResult));
  };

  const deleteLastChar = (input: string) => {
    return setCurrentInput(input.slice(0, -1));
  };

  const clearAll = () => {
    setPrevInput('');
    setCurrentInput('');
    setOperator('');
    setResult('0');
    setRecord([]);
  };

  const handleClick = (value: string) => {
    if (value >= '0' && value <= '9') {
      setCurrentInput((currentInput) => currentInput + value);
    } else if (currentInput !== '' && operators.includes(value)) {
      calculate();
      setOperator(value);
      setRecord((record) => [...record, currentInput, value]);
      setPrevInput(currentInput);
      console.log('prevInput Handle: ', prevInput);
      setCurrentInput('');
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
        if (currentInput !== '') {
          calculate();
          setRecord((record) => [...record, currentInput, value, result]);
        }
    }
  };

  console.log('record: ', record);
  console.log('prevInput: ', prevInput);
  console.log('currentInput: ', currentInput);
  console.log('result Outside:', result);

  return (
    <>
      <Display result={currentInput === '' ? result : currentInput} />
      <Keypad onButtonClick={handleClick} />
    </>
  );
}

