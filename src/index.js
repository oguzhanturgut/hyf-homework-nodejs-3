const express = require('express');
const app = express();
const PORT = 3000;

const users = [];
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/users', (req, res) => {
  // if (users.length === 0) return res.status(204).send([]);
  res.send(users);
});
app.get('/user/:id', (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  res.json(user);
});
app.post('/user', (req, res) => {
  const user = { id: 0 };
  users.push(user);
  res.json(user);
});

app.delete('/user/:id', (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (!user) return res.sendStatus(204);
  users.splice(users.indexOf(user), 1);
  res.status(202).send(user);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
