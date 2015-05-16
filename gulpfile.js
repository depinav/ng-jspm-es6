var gulp 		= require('gulp'),
  	connect 	= require('gulp-connect'),
  	less 			= require('gulp-less'),
  	path			= require('path'),
    del       = require('del'),
    karma     = require('karma').server,
    jspm      = require('jspm');

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

gulp.task('less:vendor', function() {
	return gulp.src(['./app/components/bootstrap-less/less/bootstrap.less'])
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

gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    browsers: ['PhantomJS']
  }, done);
});

gulp.task('connect', function() {
  connect.server({
    root: ['./', 'app'],
    livereload: true,
    port: 1035
  });
});

// Production Stuff
gulp.task('jspm:bundle', function() {
  jspm.bundleSFX('app/app', 'dist/build.js', {

  }).then(function() {
    console.log('bundle done');
  })
  .catch(function(err) {
    console.log('Error: ' + err);
  });
});

gulp.task('html:build', function() {
  gulp.src('./app/**/**/*.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('css:build', function() {
  gulp.src('./app/**/**/*.css')
  .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  del([
    './dist/*'
  ]);
});

gulp.task('connect:build', function() {
  connect.server({
    root: ['dist'],
    livereload: true,
    port: 1035
  });
});

// Start the tasks
gulp.task('default', ['connect', 'watch', 'less:vendor', 'less', 'test']);
gulp.task('build', ['connect:build', 'less:vendor', 'clean', 'html:build', 'css:build', 'jspm:bundle'])
