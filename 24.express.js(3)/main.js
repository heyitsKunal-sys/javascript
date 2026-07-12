// RESPONSE , REQUEST AND ROUTERS !!!!!


const express = require('express');


const app = express();
const port = 8080;


// Respond to GET request on the root route
app.get('/', (req, res) => {
    console.log("its a get request")
    res.send('GET request to the homepage');
});

// Respond to POST request on the root route
app.post('/', (req, res) => {
    console.log("hey post bhai")
    res.send('POST request to the homepage');
});

// Respond to GET request on the /about route
app.get('/about', (req, res) => {

    res.send('About page');
});

// Catch all other routes
// app.all('*', (req, res) => {
//     res.status(404).send('404 - Page not found');
// });

app.get('/index', (req, res) => {
    console.log("hey index")
    res.sendFile('template/index.html', { root: __dirname });
    // hey iam bold this is index.html
    //  res.sendFile : we serve html through this
});
app.get('/api', (req, res) => {
    res.json({ a: 10, b: 2, c: 3, d: 5 })
})   //{"a":10,"b":2,"c":3,"d":5}

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// Postman is an API platform used to test, document, and debug your Express.js backend endpoints without needing a frontend user interface.
// It allows developers to send HTTP requests(like GET, POST, PUT, DELETE) directly to a local or remote Express server and view the server's responses.