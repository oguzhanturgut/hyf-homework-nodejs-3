const express = require('express');
const app = express();
const PORT = 3000;

const users = [];
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/users', (req, res) => res.send(users));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
