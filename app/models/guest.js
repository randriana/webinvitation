var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * User schema
 */

var GuestSchema = new Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  passcode: { type: String, default: '' },
});