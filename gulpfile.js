var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('./src/app/**/*.scss')
    //.pipe(autoprefixer())
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(function ( file ) {
        return file.base;
      }));
  });

  gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', ['sass']);
  });

  gulp.task('default', ['sass:watch']);
