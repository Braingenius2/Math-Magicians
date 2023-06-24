import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Calculator', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should update the display when a button is clicked', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    const button = getByText('7');
    fireEvent.click(button);
    const display = getByDisplayValue('7');
    expect(display).toBeInTheDocument();
  });
});
