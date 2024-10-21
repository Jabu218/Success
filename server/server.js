// server.js
const express = require('express');
const path = require('path');
const routes = require('./routes'); // Import routes
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse URL-encoded bodies and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Use the routes defined in routes.js
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
