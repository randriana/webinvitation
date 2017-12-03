var express = require('express');
var router = express.Router();

var path = require('path');
var public = path.normalize(__dirname + '/../../public')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', {root: public});
});

router.get('/test', function(req, res, next) {
  res.sendFile('test.html', {root: public});
});

module.exports = router;
