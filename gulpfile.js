var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function() {
  gulp.src('assets/vendor/bootstrap/js/*.js')
  .pipe(concat('app.js'))
  .pipe(gulp.dest('js'));
});
gulp.task('css', function() {
  gulp.src('assets/vendor/bootstrap/css/*.css')
  .pipe(concat('app.css'))
  .pipe(gulp.dest('css'));
});