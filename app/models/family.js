var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * User schema
 */

/* Remember to add data to app/models/family.ts as well */
var FamilySchema = new Schema({
  name: {type: String, default: ""},
  members: [],
  passcode: {type: String, default: ""},
  answered: {type: Boolean, default: false},
  knownMembers: {type: Boolean, default: true},
  openedInvite: {type: Boolean, default: false},
  openedDate: []
});

module.exports = mongoose.model('Family', FamilySchema);
