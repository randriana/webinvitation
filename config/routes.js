/**
 * Module dependencies.
 */

var index = require('../app/routes/index');
var users = require('../app/routes/users');

/**
 * Expose
 */

 module.exports = function( app ) {
    app.use('/', index);
    app.use('/users', users);
 }