var gulp 		= require('gulp'),
  	connect 	= require('gulp-connect'),
  	less 			= require('gulp-less'),
  	path			= require('path');

// Watch our changes
gulp.task('watch', function(){
  // gulp.watch(['./**/**/*.html'], ['reload']);
  gulp.watch(['./app/**/**/*.js', './**/**/*.html', './app/**/**/*.css'], ['reload']);
  gulp.watch(['./app/**/**/*.less'], ['less']);
});

gulp.task('reload', function() {
	gulp.src('./app')
	.pipe(connect.reload());
});

gulp.task('vendor-less', function() {
	return gulp.src('./app/components/bootstrap-less/less/bootstrap.less')
	.pipe(less({
		paths: [path.join(__dirname, 'less', 'includes')]
	}))
	.pipe(gulp.dest('./app/assets/css'));
});

gulp.task('less', function() {
	return gulp.src('./app/assets/less/main.less')
	.pipe(less({
		// paths: [path.join(__dirname, 'less', 'includes')]
	}))
	.pipe(gulp.dest('./app/assets/css'));
});

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: 1035
  });
});

// Start the tasks
gulp.task('default', ['connect', 'watch', 'vendor-less', 'less']);