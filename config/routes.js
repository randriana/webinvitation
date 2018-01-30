/**
 * Module dependencies.
 */

var index = require('../app/routes/index');
var families = require('../app/routes/families');
var stats = require('../app/routes/stats-api');

/**
 * Expose
 */

 module.exports = function( app ) {
    app.use('/', index);
    app.use('/families', families);
    app.use('/stats', stats);
 }
