/**
 * CMS - by Henrique Arthur <eu@henriquearthur.com.br>
 *
 * Generate Sprites from sprites folder
 *
 */

var paths       = require('../config').paths;
var browserSync = require('../browserSync').browserSync;

var gulp        = require('gulp');
var spritesmith = require('gulp.spritesmith');
var buffer      = require('vinyl-buffer');
var merge       = require('merge-stream');
var imagemin    = require('gulp-imagemin');
var gulpif      = require('gulp-if');
var dotenv      = require('dotenv').config();

gulp.task('build:sprites', function(cb) {
    var spriteData = gulp.src(paths.src.sprites).pipe(spritesmith({
        imgName: '../images/sprite.png',
        cssName: '_sprite.scss'
    }));

    var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dist.images));

    var cssStream = spriteData.css
    .pipe(gulp.dest(paths.srcFolder.scss))
    .pipe(gulpif(dotenv.ENVIRONMENT == 'development', browserSync.stream()));

    return merge(imgStream, cssStream);
});
