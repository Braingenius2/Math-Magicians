import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from '../Button';

describe('Button', () => {
  it('should render the button with label', () => {
    const label = 'Click me';
    const onClick = jest.fn();
    const { getByText } = render(<Button label={label} onClick={onClick} />);
    const button = getByText(label);
    expect(button).toBeInTheDocument();
  });

  it('should call the onClick function when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button label="Click me" onClick={onClick} />);
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
