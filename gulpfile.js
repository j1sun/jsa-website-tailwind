var postcss = require('gulp-html-postcss');
var gulp = require('gulp');
var cssImport = require('postcss-import');
var tailwindcss = require('tailwindcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

gulp.task('css', function () {
  var plugins = [
    cssImport,
    tailwindcss,
    autoprefixer,
    cssnano
  ];

  gulp.src('./src/*.html')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dest'));

  gulp.src('./src/img/*')
    .pipe(gulp.dest('./dest/img/'));

  gulp.src('./src/favicons/*')
    .pipe(gulp.dest('./dest/favicons/'));

  return gulp.src('./src/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dest'));
});