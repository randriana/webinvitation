var express = require('express');
var router = express.Router();

var Family = require('../models/family');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test/:passcode', function(req, res, next) {

  Family.find({ passcode: req.params.passcode }, function(err, fam) {
    if(err) {
      res.send(err);
    } else if(fam.length > 0) {
      res.send(fam[0].name);
    } else {
      res.send('not found');
    }
    
  });
  
});

router.post('/test', function(req, res, next) {
  var newFamily = new Family(
    {
      name: 'Testesen',
      members: [
        { name: 'Test', attending: false, answered: false},
        { name: 'Kari', attending: false, answered: false},
        { name: 'Ola', attending: false, answered: false}],
      passcode: 'TOKRF'
    })

    newFamily.save(function (err) {
      if (err) {
        res.send('err', err);
      } else {
        res.send('cool');
      }
    });
});

module.exports = router;
