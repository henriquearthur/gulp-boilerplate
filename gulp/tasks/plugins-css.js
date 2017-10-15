/**
 * CooeeTube - by Henrique Arthur <eu@henriquearthur.me>
 *
 * Concat (and minify if in production) all CSS Plugins (bower and plugins-css folder)
 *
 */

 var paths          = require('../config').paths;
 var bowerOverrides = require('../config').bowerOverrides;
 var browserSync    = require('../browserSync').browserSync;

 var gulp           = require('gulp');
 var filter         = require('gulp-filter');
 var mainBowerFiles = require('main-bower-files');
 var concat         = require('gulp-concat');
 var replace        = require('gulp-replace');
 var chmod          = require('gulp-chmod');
 var gulpif         = require('gulp-if');
 var cssnano        = require('gulp-cssnano');
 var dotenv         = require('dotenv').config();
 var plumber        = require('gulp-plumber');
 var notify         = require("gulp-notify");
 var sourcemaps     = require('gulp-sourcemaps');

 gulp.task('build:pluginsCSS', function() {
    var filterCSS = filter('**/*.css');

    return gulp.src(mainBowerFiles(bowerOverrides).concat(paths.src.pluginsCSS))
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(filterCSS)
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.css'))
    .pipe(replace("url('blank.gif')", "url('../images/blank.gif')"))
    .pipe(replace("url('fancybox_sprite.png')", "url('../images/fancybox_sprite.png')"))
    .pipe(replace("url('fancybox_loading.gif')", "url('../images/fancybox_loading.gif')"))
    .pipe(replace("url('fancybox_overlay.png')", "url('../images/fancybox_overlay.png')"))
    .pipe(replace("url('fancybox_sprite@2x.png')", "url('../images/fancybox_sprite@2x.png')"))
    .pipe(replace("url('fancybox_loading@2x.gif')", "url('../images/fancybox_loading@2x.gif')"))
    .pipe(replace("themes/default/assets/", "../../semantic/dist/themes/default/assets/"))
    .pipe(chmod(0o755))
    .pipe(gulpif(dotenv.ENVIRONMENT == 'production', cssnano({removeAllButFirst: true, zindex: false})))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(gulpif(dotenv.ENVIRONMENT == 'development', browserSync.stream()));
});
