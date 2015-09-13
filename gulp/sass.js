// var gulp = require( 'gulp' );
// var less = require( 'gulp-less' );

// gulp.task( 'less', function () {
// 	return gulp.src( './style/**/*.less' )
// 		.pipe( less() )
// 		.pipe( gulp.dest( './compile/style' ) );
// } );

var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('./style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./compile/style'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./style/**/*.scss', ['sass']);
});