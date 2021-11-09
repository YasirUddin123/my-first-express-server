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
app.use(express.static('./server/public'));

// Starts the server, and listens for requests:
app.listen(5000, function() {
    console.log('Your first express server is running!');
});
