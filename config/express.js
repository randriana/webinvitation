var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');

var root = path.normalize(__dirname + '/..');


module.exports = function ( app ) {
    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(cookieParser());
    app.use(express.static(root + '/public'));

    app.set('views', path.join(root, 'views'));
    app.set('view engine', 'ejs');

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        if ( err.status === 404 ) {
          res.redirect('/');
        } else {
          // render the error page
          res.status(err.status || 500);
          res.send(err.message);
        }
    });
}
