// import files and packages up here
var express = require('express');
var morgan = require('morgan');
var data = require('./data.json');

// create your express server below
var app = express();

// add your routes and middleware below
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.status(200).send("It's working")
});
app.get('/data', (req, res) => {
    res.status(200).send(data)
});

// finally export the express application
module.exports = app;
