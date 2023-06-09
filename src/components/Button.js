import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, onClick, label }) => (
  <button type="button" className={className} onClick={onClick}>
    { label }
  </button>
);
Button.propType = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.func,
};

export default Button;
