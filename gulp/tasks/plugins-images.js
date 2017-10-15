/**
 * CMS - by Henrique Arthur <eu@henriquearthur.com.br>
 *
 * Compress all images from Bower plugins and plugins-images folder
 *
 */

 var paths          = require('../config').paths;
 var bowerOverrides = require('../config').bowerOverrides;
 var browserSync    = require('../browserSync').browserSync;

 var gulp           = require('gulp');
 var filter         = require('gulp-filter');
 var mainBowerFiles = require('main-bower-files');
 var imagemin       = require('gulp-imagemin');
 var pngquant       = require('imagemin-pngquant');
 var chmod          = require('gulp-chmod');
 var gulpif         = require('gulp-if');
 var dotenv         = require('dotenv').config();
 var plumber        = require('gulp-plumber');
 var notify         = require("gulp-notify");

 gulp.task('build:pluginsIMG', function() {
    var filterIMG = filter('**/*.{png,jpg,jpeg,gif,bmp}');

    return gulp.src(mainBowerFiles(bowerOverrides).concat(paths.src.pluginsIMG))
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(filterIMG)
    .pipe(gulpif(dotenv.ENVIRONMENT == 'production', imagemin({progressive: true, svgoPlugins: [{removeViewBox: false}], use: [pngquant()] })))
    .pipe(chmod(0o755))
    .pipe(gulp.dest(paths.dist.images))
    .pipe(gulpif(dotenv.ENVIRONMENT == 'development', browserSync.stream()));
});
