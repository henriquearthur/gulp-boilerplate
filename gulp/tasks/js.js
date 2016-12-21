/**
 * __projectname__ - by Henrique Arthur <eu@henriquearthur.me>
 *
 * Minify if in production; and copy JS files to assets folder
 *
 */

 var paths          = require('../config').paths;
 var browserSync    = require('../browserSync').browserSync;

 var gulp    = require('gulp');
 var changed = require('gulp-changed');
 var chmod   = require('gulp-chmod');
 var uglify  = require('gulp-uglify');
 var util    = require('gulp-util');
 var gulpif  = require('gulp-if');
 var dotenv  = require('dotenv').config();
 var plumber = require('gulp-plumber');
 var notify  = require("gulp-notify");

 gulp.task('build:js', function() {
    return gulp.src(paths.src.scripts)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(changed(paths.dist.scripts))
    .pipe(chmod(644))
    .pipe(gulpif(dotenv.ENVIRONMENT == 'production', uglify({ preserveComments: 'some' }).on('error', util.log)))
    .pipe(gulp.dest(paths.dist.scripts))
    .pipe(gulpif(dotenv.ENVIRONMENT == 'development', browserSync.stream()));
 });
