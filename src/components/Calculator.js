import React, { useState} from 'react';
import Button from './Button';
import '../css/Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({total: null, next: null, operation: null});
  const handleClick = (buttonName) => {
    setState(calculate(state, buttonName));
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" readOnly value="0" />
      </div>
    <div className="buttons">
      <div className="row">
        <Button onClick={ () => handleClick('AC')} label="AC" />
        <Button onClick={ () => handleClick('+/-')} label="+/-" />
        <Button onClick={ () => handleClick('%')} label="%" />
        <Button onClick={ () => handleClick('÷')} className="operation" label="÷" />
      </div>
      <div className="row">
        <Button onClick={ () => handleClick('7')} className="number" label="7" />
        <Button onClick={ () => handleClick('8')} className="number" label="8" />
        <Button onClick={ () => handleClick('9')} className="number" label="9" />
        <Button onClick={ () => handleClick('x')} className="operation" label="x" />
      </div>
      <div className="row">
        <Button onClick={ () => handleClick('4')} label="4" />
        <Button onClick={ () => handleClick('5')} label="5" />
        <Button onClick={ () => handleClick('6')} label="6" />
        <Button onClick={ () => handleClick('-')} className="operation" label="-" />
      </div>
      <div className="row">
        <Button onClick={ () => handleClick('1')} className="number" label="1" />
        <Button onClick={ () => handleClick('2')} className="number" label="2" />
        <Button onClick={ () => handleClick('3')} className="number" label="3" />
        <Button onClick={ () => handleClick('+')} className="operation" label="+" />
      </div>
      <div className="row">
        <Button onClick={ () => handleClick('0')} className="number zero" label="0" />
        <Button onClick={ () => handleClick('.')} label="." />
        <Button onClick={ () => handleClick('=')} className="operation" label="=" />
      </div>
    </div>
  </div>
  );
};

export default Calculator;
