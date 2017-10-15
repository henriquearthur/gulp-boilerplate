/**
 * CooeeTube - by Henrique Arthur <eu@henriquearthur.com.br>
 *
 * Concatenate files starting with '_';
 * Minify if in production;
 * Copy JS files to assets folder;
 *
 */

 var paths          = require('../config').paths;
 var browserSync    = require('../browserSync').browserSync;

 var gulp       = require('gulp');
 var changed    = require('gulp-changed');
 var concat     = require('gulp-concat');
 var chmod      = require('gulp-chmod');
 var uglify     = require('gulp-uglify');
 var util       = require('gulp-util');
 var gulpif     = require('gulp-if');
 var dotenv     = require('dotenv').config();
 var plumber    = require('gulp-plumber');
 var notify     = require("gulp-notify");
 var sourcemaps = require('gulp-sourcemaps');

 var babelify   = require('babelify');
 var browserify = require('browserify');
 var buffer     = require('vinyl-buffer');
 var source     = require('vinyl-source-stream');

 gulp.task('build:es6', function() {
    var bundler = browserify({
        entries: paths.srcFolder.scriptsES6,
        debug: true
    });

    bundler.transform(babelify, {
        presets: ["env"]
    });

    return bundler.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(changed(paths.dist.scripts))
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(chmod(0o755))
    .pipe(gulpif(dotenv.ENVIRONMENT == 'production', uglify({ preserveComments: 'some' }).on('error', util.log)))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.dist.scripts))
    .pipe(gulpif(dotenv.ENVIRONMENT == 'development', browserSync.stream()));
});
