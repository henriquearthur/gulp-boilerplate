/**
 * __projectname__ - by Henrique Arthur <eu@henriquearthur.me>
 *
 * Concat (and minify if in production) all JS Plugins (bower and plugins-js folder)
 *
 */

 var paths          = require('../config').paths;
 var bowerOverrides = require('../config').bowerOverrides;
 var browserSync    = require('../browserSync').browserSync;

 var gulp           = require('gulp');
 var filter         = require('gulp-filter');
 var order          = require('gulp-order');
 var mainBowerFiles = require('main-bower-files');
 var concat         = require('gulp-concat');
 var replace        = require('gulp-replace');
 var util           = require('gulp-util');
 var chmod          = require('gulp-chmod');
 var gulpif         = require('gulp-if');
 var uglify         = require('gulp-uglify');
 var dotenv         = require('dotenv').config();
 var plumber        = require('gulp-plumber');
 var notify         = require("gulp-notify");

 gulp.task('build:pluginsJS', function() {
    var filterJS = filter('**/*.js');

    return gulp.src(mainBowerFiles(bowerOverrides).concat(paths.src.pluginsJS))
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(filterJS)
    .pipe(order(['jquery.js', '*']))
    .pipe(concat('vendor.js'))
    .pipe(chmod(644))
    .pipe(gulpif(dotenv.ENVIRONMENT == 'production', uglify({ preserveComments: 'some' }).on('error', util.log)))
    .pipe(gulp.dest(paths.dist.scripts))
    .pipe(gulpif(dotenv.ENVIRONMENT == 'development', browserSync.stream()));
 });
