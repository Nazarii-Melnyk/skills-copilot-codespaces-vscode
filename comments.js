// Create web server
// 1. Require the express module
// 2. Create an instance of an express server
// 3. Create a get route for the /comments path
// 4. Send a response with the text "This is a GET request"
// 5. Create a post route for the /comments path
// 6. Send a response with the text "This is a POST request"
// 7. Start the server on port 3000
const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
    res.send('This is a GET request');
});

app.post('/comments', (req, res) => {
    res.send('This is a POST request');
});

app.listen(3000);