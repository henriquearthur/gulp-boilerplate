/**
 * __projectname__ - by Henrique Arthur <eu@henriquearthur.me>
 *
 * Generate Sprites from sprites folder
 *
 */

 var paths       = require('../config').paths;
 var browserSync = require('../browserSync').browserSync;

 var gulp   = require('gulp');
 var sprity = require('sprity');
 var gulpif = require('gulp-if');
 var dotenv = require('dotenv').config();
 var notify = require("gulp-notify");

 gulp.task('build:sprites', function(cb) {
    return sprity.src({
        out: paths.dist.images,
        src: paths.src.sprites,
        style: '_sprites',
        margin: 0,
        split: true
    }).on('error', function (err) {
        console.log(err.toString());
        cb();
    })
    .pipe(gulpif('*.png', gulp.dest(paths.dist.images), gulp.dest(paths.srcFolder.scss)))
    .pipe(gulpif(dotenv.ENVIRONMENT == 'development', browserSync.stream()));
});
