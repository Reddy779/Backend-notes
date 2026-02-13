const express = require('express');

// creating the server instance
const app = express();

app.get('/', (req, res) => {
  res.send('Hello DR')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

// Starting the server at port 3000
app.listen(3000, () => {
  console.log('Server is Running on Port 3000');
})

// Computer vs Server Architechure