var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');
var sass = require('gulp-sass');
var path = require('path'); 

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('sass', function () {
  gulp.src('app/style/common.scss')
    // .pipe(concat('common.css'))
    .pipe(sass())
      
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('app/js/main.js')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
    	gulp.watch('index.html', ['html'])
        gulp.watch('app/style/*.scss', ['sass'])
        gulp.watch('app/js/main.js', ['js']);
       
});

gulp.task('default', ['connect', 'sass', 'html', 'js', 'watch']);

// gulp.src('./less/**/*.less')
    
//     .pipe(gulp.dest('./public/css'));