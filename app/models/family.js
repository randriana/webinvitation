var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * User schema
 */

var FamilySchema = new Schema({
  name: {type: String, default: ""},
  members: [],
  passcode: {type: String, default: ""},
  answered: {type: Boolean, default: false},
  knownMembers: {type: Boolean, default: true},
  openedInvite: {type: Boolean, default: false}
});

module.exports = mongoose.model('Family', FamilySchema);
