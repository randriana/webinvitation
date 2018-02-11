var express = require('express');
var router = express.Router();

var Family = require('../models/family');

router.get('/all', function(req, res, next) {
  Family.find({}, function(err, fam) {
    if(err) {
      res.send(err);
    } else {
      res.status(200).send(fam);
    }
  });
});



router.get('/:passcode', function(req, res, next) {
  Family.findOne({ passcode: req.params.passcode }, function(err, fam) {
    if(err) {
      res.send(err);
    } else if(!fam) {
      res.status(404).send('User not found');
    } else {
      _setVisited(fam);
      res.send(fam);
    }
  });
});

router.put('/submitAnswer', function(req, res, next) {
  var family = req.body;
  Family.findOne({ passcode: family.passcode }, function(err, fam) {
    if(err) {
      res.send(err);
    } else if(!fam) {
      res.status(404).send('User not found');
    } else {
      family.answered = true;
      fam.set(family);

      fam.save(function(err, updatedFam){
        if(err) {
          res.send(err);
        } else {
          res.send(updatedFam);
        }
      });
    }
  });
});

router.post('/post', function(req, res, next) {
  var newFamily = new Family(req.body)

    newFamily.save(function (err, newFam) {
      if (err) {
        res.send(err);
      } else {
        res.send(newFam);
      }
    });
});

function _setVisited(fam) {
  fam.openedInvite = true;
  fam.openedDate.push(new Date(Date.now()));
  fam.save(function(err, updatedFam){

  });
}

module.exports = router;
