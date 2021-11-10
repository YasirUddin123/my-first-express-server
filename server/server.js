console.log('Look at my first server!');

// Load the express library from node_modules/express:
const express = require('express');

// Create a variable called "app". This variable is...
// THE SERVER:
const app = express();

// Tell express where to find out "public" files.
    // aka "the client-side" files
    // aka "static assets"
    // aka "all the stuff we've been happily doing already"
    // GET index.html
app.use(express.static('./server/public'));

// GET requests with data
const message = 'Hello from the Server!';
// Route function, Endpoint
// req (request), object
// res (response), object
app.get('/message', (req, res) => {

    console.log('in the GET route for /message');

    // we need to respond
    res.send(message);
});

const dogs = ['Marmaduke', "Snoopy", "Scooby Doo"];

app.get('/dogs', (req, res) => {
    console.log('in get for /dogs');


    //send back the array of data
    res.send(dogs);

});

app.get('/number', (req, res) => {

    //send a number - numbers are the only data type that will not send
    res.send(7);

});

// Starts the server, and listens for requests:
app.listen(5000, function() {
    console.log('Your first express server is running!');
});
