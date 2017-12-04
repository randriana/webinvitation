var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');

var db = require('./config/db');

var app = express();

// models

//TODO: fix this fail
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./config/routes')(app);
require('./config/express')(app);

// connect to our mongoDB database 
mongoose.connect(db.url,  { useMongoClient: true }); 


module.exports = app;
