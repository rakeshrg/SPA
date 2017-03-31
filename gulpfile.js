var gulp     = require('gulp');
var concat   = require('gulp-concat');
var cssmin   = require('gulp-minify-css');
var rename   = require("gulp-rename");
var sass     = require('gulp-sass');
var uglify   = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var clean    = require('gulp-clean');
var jshint   = require('gulp-jshint');


// default task
gulp.task('default', function() {

});

// sass styles task
gulp.task('styles', function() {
  return gulp.src('./app/assets/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/assets/styles/'))
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./app/assets/styles/'));
});

// image minify task
gulp.task('imagemin', function() {
  return gulp.src('./app/assets/images/src/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./app/assets/images/build/'));
});

//clean image minify folder task
gulp.task('clean', function() {
  return gulp.src('./app/assets/images/build/')
    .pipe(clean());
});

//clean image minify folder task
gulp.task('jshint', function() {
  return gulp.src('./app/assets/styles/scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// watch task
gulp.task('watch', function() {
  gulp.watch('./app/assets/styles/scripts/**/*.js', ['scripts']);
  gulp.watch('./app/assets/sass/*.scss', ['styles']);
});