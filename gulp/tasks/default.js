/**
 * CMS - by Henrique Arthur <eu@henriquearthur.com.br>
 *
 * Default task - Run other tasks in the correct sequence
 *
 */

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(callback) {
    runSequence(
        'clean',
        'browserSync',
        ['build:sprites', 'build:images'],
        ['build:pluginsCSS', 'build:pluginsJS', 'build:pluginsIMG', 'build:scss', 'build:es6', 'build:js', 'build:fonts'],
        'watch',
        callback
        );
});
