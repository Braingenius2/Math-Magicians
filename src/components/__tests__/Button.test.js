import React from "react";
import { render } from "@testing-library/react";
import Button from '../Button';

describe('Button', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Button label="Test" onClick={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
