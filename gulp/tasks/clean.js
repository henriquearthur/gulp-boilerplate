/**
 * CMS - by Henrique Arthur <eu@henriquearthur.com.br>
 *
 * Delete previously generated assets
 *
 */

var paths = require('../config').paths;

var gulp = require('gulp');
var del  = require('del');

gulp.task('clean', function() {
    return del([paths.dist.fonts, paths.dist.images, paths.dist.scripts, paths.dist.css, paths.srcFolder.scss + '/_sprite.scss']);
});
