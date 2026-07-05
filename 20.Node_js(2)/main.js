// const http = require('node:http');
// const fs = require('node:fs');
// jab jum type change krte h or type: module krte ha to hum require ka use nahi kr skte h isliye hum import ka use krte h
import http from 'node:http';
// we use require when type is commonjs and we use import when type is module

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain'); change plain to html to print hello world in h1 tag
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// npm i --global nodemon restrtart the server automatically when changes are made in the code
// nodemon main.js is the command to run the server using nodemon