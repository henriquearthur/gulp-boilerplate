/**
 * __projectname__ - by Henrique Arthur <eu@henriquearthur.me>
 *
 * Compress images
 *
 */

 var paths       = require('../config').paths;
 var browserSync = require('../browserSync').browserSync;

 var gulp     = require('gulp');
 var changed  = require('gulp-changed');
 var gulpif   = require('gulp-if');
 var dotenv   = require('dotenv').config();
 var imagemin = require('gulp-imagemin');
 var pngquant = require('imagemin-pngquant');
 var chmod    = require('gulp-chmod');
 var plumber  = require('gulp-plumber');
 var notify   = require("gulp-notify");

 gulp.task('build:images', function() {
    return gulp.src(paths.src.images)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(changed(paths.dist.images))
    .pipe(gulpif(dotenv.ENVIRONMENT == 'production', imagemin({progressive: true, svgoPlugins: [{removeViewBox: false}], use: [pngquant()] })))
    .pipe(chmod(644))
    .pipe(gulp.dest(paths.dist.images))
    .pipe(gulpif(dotenv.ENVIRONMENT == 'development', browserSync.stream()));
 });
