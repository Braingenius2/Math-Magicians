import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const category = 'inspirational';
    const apiKey = 'gIv5y+Z5zM+Do1eJt7+9/Q==SDUpgc78Dmo5YZCg';
    const url = `https://api.apiinjas.com/v1/quotes?category=${category}`;

    fetch(url, {
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to fetch quote');
      })
      .then((data) => {
        setQuote(data[0]);
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
      <p>{quote.quote}</p>
      <p>- {quote.author}</p>
    </div>
  );
};

export default Quote;
