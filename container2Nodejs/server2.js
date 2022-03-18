const express = require('express');

// Constants
const PORT = 8081;
const HOST = '127.17.0.1';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Server 2 !');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
