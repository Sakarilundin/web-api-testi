const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
});

var express = require('express')
express.static(root, [options])
var app = express()
app.use(express.static('public'))


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
