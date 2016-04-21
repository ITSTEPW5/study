var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function() {
	var js = [
		'assets/vendor/jquery/jquery-2.2.3.min.js',
		'assets/vendor/bootstrap/js/bootstrap.min.js',
		'assets/vendor/sweetalert/dist/sweetalert.min.js',
	];
  	gulp.src(js)
  		.pipe(concat('vendor.js'))
  		.pipe(gulp.dest('assets/js'));
});

gulp.task('css', function() {
	var css = [
		'assets/vendor/bootstrap/css/bootstrap.min.css',
		'assets/vendor/sweetalert/dist/sweetalert.css',
	];		
  	gulp.src(css)
  		.pipe(concat('vendor.css'))
  		.pipe(gulp.dest('assets/css'));
});

gulp.task('default', function() {
	gulp.start('css');
	gulp.start('js');
});