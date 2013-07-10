var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var string = fs.readFileSync("index.html");

var buffer = new Buffer (string.length);
app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
