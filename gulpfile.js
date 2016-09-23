var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// Minify JS
gulp.task('minify-js', function() {
  gulp.src(['./app.js', './pages/**/*.js', './components/**/*.js'])
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./build'));
});