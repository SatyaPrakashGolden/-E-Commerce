// app.js
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from a .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send(`Hello, ${process.env.NAME || 'World'}!`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
