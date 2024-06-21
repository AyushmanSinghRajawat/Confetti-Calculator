import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import Confetti from './Confetti';
import { calculate } from '../utils/calculate';
import '../styles/Calculator.css';

const buttons = [
  'MC', 'M+', 'M-', 'MR',
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', '.', '=', '+',
  '(', ')', 'x²', 'x³',
  'eˣ', '10ˣ', 'xʸ', '2nd',
  '√', 'ln', 'log₁₀', 'Rand',
  'AC', '+/-', '%', 'x!',
  'sin', 'cos', 'tan', 'π', 'EE', 'Rad'
];

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [confetti, setConfetti] = useState(false);

  const handleButtonClick = (label) => {
    if (label === '=') {
      const res = calculate(expression);
      setResult(res);
      setExpression(res.toString());
      setConfetti(expression.includes('5') && expression.includes('6'));
    } else if (label === 'AC') {
      setExpression('');
      setResult('');
      setConfetti(false);
    } else {
      setExpression((prev) => prev + label);
    }
  };

  const getButtonClass = (label) => {
    let className = 'button';
    if (['/', '*', '-', '+'].includes(label)) className += ' operator';
    if (label === '0') className += ' zero';
    if (label === '=') className += ' equals';
    if (label === '0') className += ' button-wide';
    if (label === 'AC') className += ' button-tall';
    return className;
  };

  return (
    <div className="calculator">
      <Display value={expression || result || '0'} />
      <Confetti trigger={confetti} />
      <div className="buttons">
        {buttons.map((btn, i) => (
          <Button
            key={i}
            className={getButtonClass(btn)}
            label={btn}
            onClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
