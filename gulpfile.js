const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const gulpCopy = require('gulp-copy');
const imagemin = require('gulp-imagemin');
const zip = require('gulp-zip');
const inject = require('gulp-inject');
const imageop = require('gulp-image-optimization');

gulp.task('default', ['compile']);
gulp.task('compile', ['compile:novent', 'compile:preview'], compress);
gulp.task('watch', ['watch:preview', 'watch:novent']);

gulp.task('compile:novent', ['compile:novent:js', 'compile:novent:assets'], compileNoventPage);
gulp.task('compile:novent:js', compileNoventJs);
gulp.task('compile:novent:assets', compileNoventAssets);

gulp.task('compile:preview', ['compile:preview:js', 'compile:preview:assets'], compilePreviewPage);
gulp.task('compile:preview:js', compilePreviewJs);
gulp.task('compile:preview:assets', compilePreviewAssets);

gulp.task('watch:preview', watchPreview);
gulp.task('watch:novent', watchNovent);

function compileNoventJs() {
  return gulp.src(['node_modules/novent-engine/dependencies/*.js', 'node_modules/novent-engine/build/*.js', 'src/novent/novent.js', 'src/novent/**/*.page.js', 'src/novent/**/*.event.js'])
  .pipe(concat('novent.js'))
  .pipe(uglify())
  .pipe(gulp.dest('target/site/novent'));
}

function compileNoventAssets() {
  return gulp.src(['!src/novent/**/*.js', 'src/novent/**/*'])
  .pipe(gulpCopy('target/site/novent', {prefix: 2}));
}

function compileNoventPage() {
  var target = gulp.src('novent.html');
  var sources = gulp.src(['target/site/novent/**/*.css'], {read: false});

  return target.pipe(inject(sources, {ignorePath: 'target/site/novent/', relative: true}))
  .pipe(gulp.dest('target/site/novent'));
}

function compilePreviewJs() {
  return gulp.src(['node_modules/novent-engine/dependencies/**/*.js', 'node_modules/novent-engine/build/*.js', 'src/preview/preview.js', 'src/preview/**/*.page.js', 'src/preview/**/*.event.js'])
  .pipe(concat('preview.js'))
  .pipe(uglify())
  .pipe(gulp.dest('target/site/preview'));
}

function compilePreviewAssets() {
  return gulp.src(['!src/preview/**/*.js', 'src/preview/**/*'])
  .pipe(gulpCopy('target/site/preview', {prefix: 2}));
}

function compilePreviewPage() {
  var target = gulp.src('preview.html');
  var sources = gulp.src(['target/site/preview/**/*.css'], {read: false});

  return target.pipe(inject(sources, {ignorePath: 'target/site/preview/', relative: true}))
  .pipe(gulp.dest('target/site/preview'));
}

function compress() {
  return gulp.src('target/site/*')
  .pipe(zip('novent.zip'))
  .pipe(gulp.dest('target'))
}

function watchNovent() {
  gulp.watch('src/novent/**/*', ['compile:novent']);
}

function watchPreview() {
  gulp.watch('src/preview/**/*', ['compile:preview']);
}
