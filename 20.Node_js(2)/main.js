const http = require('node:http');
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