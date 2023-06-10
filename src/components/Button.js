import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, onClick, label }) => (
  <button type="button" className={className} onClick={onClick}>
    { label }
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
};

export default Button;
