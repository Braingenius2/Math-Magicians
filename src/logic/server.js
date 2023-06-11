const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

app.get('/quote', async (req, res) => {
  const response = await fetch('https://api-ninjas.com/api/quotes');
  const data = await response.json();
  res.send(data);
});

app.listen(5000);
