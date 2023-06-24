import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Calculator', () => {
  it('should render the calculator', () => {
    const { getByText } = render(<Calculator />);
    const heading = getByText("Let's do some math!");
    expect(heading).toBeInTheDocument();
  });

  it('should update the display when a button is clicked', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    const button = getByText('7');
    fireEvent.click(button);
    const display = getByDisplayValue('7');
    expect(display).toBeInTheDocument();
  });
});
