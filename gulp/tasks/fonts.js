/**
 * __projectname__ - by Henrique Arthur <eu@henriquearthur.me>
 *
 * Copy Bower plugins fonts and fonts from fonts folder to assets
 *
 */

 var paths          = require('../config').paths;
 var bowerOverrides = require('../config').bowerOverrides;
 var browserSync    = require('../browserSync').browserSync;

 var gulp           = require('gulp');
 var filter         = require('gulp-filter');
 var mainBowerFiles = require('main-bower-files');
 var chmod          = require('gulp-chmod');
 var plumber        = require('gulp-plumber');
 var notify         = require("gulp-notify");
 var gulpif         = require('gulp-if');
 var dotenv         = require('dotenv').config();

 gulp.task('build:fonts', function() {
    var filterFonts = filter('**/*.{eot,ttf,woff,woff2}', { restore: true });
    var files = mainBowerFiles(bowerOverrides);
    files.push(paths.src.fonts);

    return gulp.src(files)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(filterFonts)
    .pipe(chmod(644))
    .pipe(gulp.dest(paths.dist.fonts))
    .pipe(gulpif(dotenv.ENVIRONMENT == 'development', browserSync.stream()));
});
