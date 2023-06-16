import React from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './css/App.css';

const App = () => (
  <section id="calculator-container">
    <Calculator />
    <Quote />
  </section>
);

export default App;
