'use strict'

const $            = require('gulp-load-plugins')();
const gulp         = require('gulp');

module.exports = function(options) {
  return function() {
    return gulp
      .src(options.src)
      .pipe($.plumber())
      .pipe($.babel({
        presets: ['es2015']
      }))
      .pipe($.concat('temp.js'))
      .pipe($.rename('build.js'))
      .pipe($.uglify())
      .pipe(gulp.dest('./dist/assets/scripts'))
  };
};
