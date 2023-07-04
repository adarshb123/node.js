// app.js

// console.log('process.env.POSTGRES:' +process.env.POSTGRES);
// require('dotenv').config({ path: './.env' });

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const database = require('./database');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, '..', 'frontend')));
app.use('/question-papers', express.static(path.join(__dirname, 'question-papers')));

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Mount the routes
app.use('/', routes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
