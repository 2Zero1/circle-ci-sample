const express = require('express');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const app = express();

app.get('/', (req, res) => {
  const { query } = req;

  res.send(`안녕 ${query.name}`);
});

app.listen(PORT, HOST, () => {
  console.log('Server start');
});
