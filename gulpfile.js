var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
  gulp.src('assets/vendor/bootstrap/js/*.js')
  .pipe(concat('app.js'))
  .pipe(gulp.dest('test'));
});