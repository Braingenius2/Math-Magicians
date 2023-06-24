import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Quote from '../Quote';

describe('Quote', () => {
  it('should render a loading message initially', () => {
    const { getByText } = render(<Quote />);
    const loadingMessage = getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  });

  it('should render the quote content after loading', async () => {
    const mockResponse = {
      quote: 'Test quote',
      author: 'Test author',
      category: 'Test category',
    };
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });
    const { getByText } = render(<Quote />);
    await waitFor(() => {
      const quote = getByText('Test quote');
      const author = getByText('Test author');
      const category = getByText('Category: Test category');
      expect(quote).toBeInTheDocument();
      expect(author).toBeInTheDocument();
      expect(category).toBeInTheDocument();
    });
  });

  it('should render an error message if there is an error', async () => {
    const errorMessage = 'Test error';
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error(errorMessage));
    const { getByText } = render(<Quote />);
    await waitFor(() => {
      const error = getByText(`Error: ${errorMessage}`);
      expect(error).toBeInTheDocument();
    });
  });
});
