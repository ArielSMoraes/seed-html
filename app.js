var express = require('express')
var app = require('express')();
let views = __dirname + '/assets/';

app.use(express.static('assets'));

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(views + 'index.html');
});

app.listen(3000);

console.log("Server running:");
console.log("http://localhost:3000");
