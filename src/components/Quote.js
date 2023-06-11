import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // make a request to http://localhost:5000/quote instead of directly to the API Ninjas API.
    // to avoid CORS anywhwere errors
    fetch('http://localhost:5000/quote')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to fetch quote');
      })
      .then((data) => {
        setQuote(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        console.error('Error fetching quote:', error);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching quote</p>;
  }

  return (
    <div>
      <p>{quote.text}</p>
      <p>
        -
        {quote.author}
      </p>
    </div>
  );
};

export default Quote;
