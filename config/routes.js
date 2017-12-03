/**
 * Module dependencies.
 */

var index = require('../app/routes/index');
var families = require('../app/routes/families');

/**
 * Expose
 */

 module.exports = function( app ) {
    app.use('/', index);
    app.use('/families', families);
 }