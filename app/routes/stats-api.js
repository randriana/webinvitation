var express = require('express');
var router = express.Router();

var Family = require('../models/family');

router.get('/answeredGuests', function (req, res, next) {
  Family.find({'answered': true}, function (err, data) {
    if(err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
});

router.get('/all', function(req, res, next) {
  var data = {
    numberOfAttendies: 0,
    openedInvitations: 0,
    answeredRsvp: 0
  }
  Family.find({}, function (err, families) {
    if(err) {
      data.error = 1;
    } else {
      for(var i = 0; i < families.length; i++) {
        if(families[i].openedInvite) {
          data.openedInvitations++;
        }
        if(families[i].answered) {
          data.answeredRsvp++;
        }
        for(var j = 0; j < families[i].members.length; j++) {
          if(families[i].members[j].attending) {
            data.numberOfAttendies++;
          }
        }
      }
      res.send(data);
    }
  })
});



module.exports = router;
