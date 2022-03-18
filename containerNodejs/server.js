server.js

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '10.0.3.7';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);