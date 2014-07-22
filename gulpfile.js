var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

gulp.task('run', function() {
  gulp.src('public/*/*')
    .pipe(watch())
    .pipe(livereload());
});