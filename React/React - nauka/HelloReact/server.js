var express = require('express')

// Create our application

var app = express();

// tell which folder I want to serve.

app.use(express.static('public'));

// start the server

app.listen(3000, function () {
  console.log('Express server is up and running on port 3000')
})
