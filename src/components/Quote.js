import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const url = 'https://api.api-ninjas.com/v1/quotes';
        const apiKey = 'gIv5y+Z5zM+Do1eJt7+9/Q==SDUpgc78Dmo5YZCg';
        const headers = {
          'X-Api-Key': apiKey,
        };
        const response = await fetch(url, { headers });
        const json = await response.json();
        setQuote(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    fetchData();
    }, []);

    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }

  return (
    <div className='quotes-container'>
      <p className='quote'>{quote.quote}</p>
      <p className='author'>{quote.author}</p>
      <p className='category'>{quote.category}</p>
    </div>
  );
}

export default Quote;