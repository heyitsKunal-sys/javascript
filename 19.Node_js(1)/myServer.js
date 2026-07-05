const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// output : a server will run at http:// and hello world will be printed on the browser
// how code works:
// 1. require('node:http') : it is used to import the http module in node.js
// 2. createServer() : it is used to create a server in node.js
// 3. listen() : it is used to listen the server on a specific port and hostname
// 4. res.statusCode : it is used to set the status code of the response
// 5. res.setHeader() : it is used to set the header of the response
// 6. res.end() : it is used to end the response and send it back to the client
// 7. console.log() : it is used to print the message on the console
