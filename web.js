var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var page = fs.readFileSync("index.html", 'utf8');

var buf = new Buffer(page, 'utf8');

app.get('/', function(request, response) {
  response.send(buf.toString('utf8', 0, string.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
