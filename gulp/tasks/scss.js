/**
 * __projectname__ - by Henrique Arthur <eu@henriquearthur.me>
 *
 * Compile (and minify if in production) all SCSS files
 *
 */

 var paths          = require('../config').paths;
 var browserSync    = require('../browserSync').browserSync;

 var gulp    = require('gulp');
 var gulpif  = require('gulp-if');
 var dotenv  = require('dotenv').config();
 var sass    = require('gulp-sass');
 var util    = require('gulp-util');
 var plumber = require('gulp-plumber');
 var notify  = require("gulp-notify");

 gulp.task('build:scss', function() {
    return gulp.src(paths.src.scss)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(gulpif(dotenv.ENVIRONMENT == 'production', sass({outputStyle: 'compressed'}).on('error', sass.logError), sass({outputStyle: 'expanded'}).on('error', sass.logError)))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(gulpif(dotenv.ENVIRONMENT == 'development', browserSync.stream()));
});
