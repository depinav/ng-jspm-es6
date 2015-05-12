var gulp = require('gulp'),
  connect = require('gulp-connect');

// Watch our changes
gulp.task('watch', function(){
  // gulp.watch(['./**/**/*.html'], ['reload']);
  gulp.watch(['./app/**/**/*.js', './**/**/*.html'], ['reload']);
});

gulp.task('reload', function() {
	gulp.src('./app')
	.pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: 1035
  });
});

// Start the tasks
gulp.task('default', ['connect', 'watch']);