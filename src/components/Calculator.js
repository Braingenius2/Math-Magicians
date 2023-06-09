import React from 'react';
import Button from './Button';

const Calculator = () => (
  <div className="calculator">
    <div className="display">
      <input type="text" readOnly value="0" />
    </div>
    <div className="buttons">
      <div className="row">
        <Button className="number" label="AC" />
        <Button className="number" label="+/-" />
        <Button className="number" label="%" />
        <Button className="operation" label="÷" />
      </div>
      <div className="row">
        <Button className="number" label="7" />
        <Button className="number" label="8" />
        <Button className="number" label="9" />
        <Button className="operation" label="×" />
      </div>
      <div className="row">
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button className="operation" label="-" />
      </div>
      <div className="row">
        <Button className="number" label="1" />
        <Button className="number" label="2" />
        <Button className="number" label="3" />
        <Button className="operation" label="+" />
      </div>
      <div className="row">
        <Button className="number zero" label="0" />
        <Button label="." />
        <Button className="operation" label="=" />
      </div>
    </div>
  </div>
);

export default Calculator;
