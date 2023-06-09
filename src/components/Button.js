import React from 'react';

const Button = ({ className, onClick, label }) => (
  <button type="button" className={ className } onClick={ onClick }>
    { label }
  </button>
);

export default Button;
