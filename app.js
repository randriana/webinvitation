var mongoose = require('mongoose');
var express = require('express');

var db = require('./config/db');

var app = express();

// models

require('./config/routes')(app);
require('./config/express')(app);

// connect to our mongoDB database 
mongoose.connect(db.url,  { useMongoClient: true }); 


module.exports = app;
