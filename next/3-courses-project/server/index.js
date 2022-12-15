const express = require('express');
const app = express();
const port = 4000;
const courses = require('./data/courses');

app.get('/', (req, res) => {
  res.status(200);
  res.json({ name: 'Nawras' });
});

app.get('/courses', (req, res) => {
  res.status(200);
  res.json({ courses });
});

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const course = courses.find((c) => c.id === id);
  res.status(200);
  res.json({ course });
});

app.listen(port, () => {
  console.log(`The server runs on port ${port}`);
});
