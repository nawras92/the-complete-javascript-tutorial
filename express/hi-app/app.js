const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('hi again');
});

app.get('/about', (req, res) => {
  res.send('ABout');
});

app.listen(port, () => {
  console.log('Our app works on port 5000');
});
