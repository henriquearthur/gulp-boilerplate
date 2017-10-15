/**
 * CMS - by Henrique Arthur <eu@henriquearthur.com.br>
 *
 * Watch for changes
 *
 */

 var paths       = require('../config').paths;
 var browserSync = require('../browserSync').browserSync;

 var gulp     = require('gulp');
 var gulpif   = require('gulp-if');
 var dotenv   = require('dotenv').config();
 var watch    = require('gulp-watch');
 var notifier = require('node-notifier');
 var path     = require('path');

 gulp.task('watch', function(cb) {
    if(dotenv.ENVIRONMENT == 'development') {
        watch(paths.src.scriptsEach, function() {
            gulp.start('build:js-each');
        });

        watch(paths.src.scriptsConcat, function() {
            gulp.start('build:js-concat');
        });

        watch(paths.src.scss, function() {
            gulp.start('build:scss');
        });

        watch(paths.src.images, function() {
            gulp.start('build:images');
        });

        watch(paths.src.sprites, function() {
            gulp.start('build:sprites');
        });

        watch(paths.appView).on("change", browserSync.reload);

        notifier.notify({
            title: 'Gulp',
            message: 'In watch mode',
            icon: path.join(__dirname, "/../../node_modules/gulp-notify/assets/gulp.png")
        });
    } else {
        cb();
    }
});
