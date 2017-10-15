/**
 * CMS - by Henrique Arthur <eu@henriquearthur.com.br>
 *
 * Initiating BrowserSync
 *
 */

 var gulp        = require('gulp');
 var browserSync = require('browser-sync').create();
 var dotenv      = require('dotenv').config();
 var gulpif      = require('gulp-if');

 module.exports = {
    browserSync: browserSync
};

gulp.task('browserSync', function(cb) {
    if(dotenv.ENVIRONMENT == 'development') {
        browserSync.init({
            proxy: dotenv.DOMAIN
        }, cb);
    } else {
        cb();
    }
});
