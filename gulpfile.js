var gulp = require('gulp'),
	tmodjs = require('gulp-tmod'),
	browserSync = require('browser-sync').create()

gulp.task('template', function() {
    var stream = gulp.src('src/**/*.html')
			.pipe(tmodjs({
				templateBase: 'src/template'
			}))
			.pipe(gulp.dest('src/lib'));
	return stream;
})

gulp.task('server',['template'],  function () {
  browserSync.init({
    files: [ 'src/**/*' ],
    server: {
      baseDir: 'src',
      index: '/views/home.html',
    },
    port: '8080'
  })
  gulp.watch('src/template/**/*', [ 'template' ])
})
