var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var db = require('./config/db');

var app = express();

// models

//TODO: fix this fail
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

require('./config/routes')(app);
require('./config/express')(app);

// connect to our mongoDB database 
mongoose.connect(db.url,  { useMongoClient: true }); 


module.exports = app;
