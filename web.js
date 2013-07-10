var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var string = new Buffer(100);

string = fs.readFileSync("index2.html");

app.get('/', function(request, response) {
  response.send(string.toString('utf8', 0, string.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
