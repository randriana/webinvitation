var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * User schema
 */

var FamilySchema = new Schema({
  name: String,
  members: [],
  passcode: String,
  answered: Boolean
});

module.exports = mongoose.model('Family', FamilySchema);