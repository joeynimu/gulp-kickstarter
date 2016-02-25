var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-minify-css'),
    csslint = require('gulp-csslint'),
    prefix = require('gulp-autoprefixer');


var browserlist = [
    'Chrome',
    'Firefox',
    'Explorer',
    'Edge',
    'iOS',
    'Opera',
    'Safari',
    'ExplorerMobile',
    'Android',
    'BlackBerry',
    'ChromeAndroid',
    'FirefoxAndroid',
    'OperaMobile',
    'OperaMini'
];

gulp.task('sass', function() {
    //autoprefix, minify and concatenate scss files
    return gulp.src('src/sass/*scss')
        .pipe(sass())
        .pipe(prefix({ browserlist }))
        .pipe(cssmin())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('css'));
});


gulp.task('watch', function() {
  
    gulp.watch('src/sass/*scss', ['sass']);

});