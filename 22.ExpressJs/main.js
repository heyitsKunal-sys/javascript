const express = require('express');
const app = express();
const port = 8080;

// Define a route for GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello World from Express yo yo');
});
app.get('/about', (req, res) => {
  res.send('Hello its about me');
});
app.get('/contact', (req, res) => {
  res.send('Hello contact me');
});


app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from database
    //For URL: http://localhost:8080/blog/kunal?mode=dark&region=in
    console.log(req.params)  //will output {slug: 'intro-to-js'}
    console.log(req.query)  //will output {mode: 'dark', region='in'}
  res.send(`Hello ${req.params.slug}`);
});  //http://localhost:8080/blog/kunal ya / kuch bhi likh dun sab ajayega

app.get('/connect/:slug/:second', (req, res) => {
    // logic to fetch {slug} from database
  res.send(`Hello ${req.params.slug} and ${req.params.second} `);
}) //http://localhost:8080/connect/kunal/hey    Screen:Hello kunal and hey

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from database
//   res.send('Hello intro to js');
// });
// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch intro to js from database
//   res.send('Hello intro to python');
// });   
// kyuki baout sare endpoints ban jayenge etne lines of code likhne padega maintainable bhi nahi h


// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});