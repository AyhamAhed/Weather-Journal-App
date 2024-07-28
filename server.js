// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
/* Middleware*/
const cors = require('cors');
// Here we are configuring express to use express.json() and express.urlencoded() as middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});

// Initialize all route with a callback function

// Callback function to complete GET '/all'
app.get('/data', (req, res) => {
    res.send(projectData);
});

// Post Route
app.post('/add', (req, res) => {
    projectData = { 
        temperature: req.body.temperature, 
        date: req.body.date, 
        userResponse: req.body.userResponse 
    };
    res.send(projectData);
});
