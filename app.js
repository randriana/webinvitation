var mongoose = require('mongoose');
var express = require('express');

var db = require('./config/db');

var app = express();



// connect to our mongoDB database 
//mongoose.connect(db.url,  { useMongoClient: true }); 

require('./config/express')(app);
require('./config/routes')(app);


module.exports = app;
