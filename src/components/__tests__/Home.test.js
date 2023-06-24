import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('should render the home page content', () => {
    const { getByText } = render(<Home />);
    const heading = getByText('Welcome to our page!');
    const paragraph1 = getByText('Math magicians is a website for all fans of mathematics.');
    const paragraph2 = getByText('Here, we believe that "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding".');
    expect(heading).toBeInTheDocument();
    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });
});
