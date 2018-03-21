const express = require('express');
const app = express();

app.use(express.static('static'))

app.get('/help', (req, res) => res.send('Coding is hard!'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(1999, () => console.log('Example app listening on port 1999!'));