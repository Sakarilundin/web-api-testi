const http = require("http");

const server = http.createServer((request, response) => {
    response.end("Path; " + request.url);
});

var express = require('express')
var app = express()


express.static(root, [options])
app.use(express.static('public'))

server.listen(8080, () => {
    console.log(`Server istening in port ${server.address().port}`);   
});