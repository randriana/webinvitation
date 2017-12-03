var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * User schema
 */

var FamilySchema = new Schema({
  name: String,
  members: [],
  passcode: String
});

module.exports = mongoose.model('Family', FamilySchema);