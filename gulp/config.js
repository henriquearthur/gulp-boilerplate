/**
 * CMS - by Henrique Arthur <eu@henriquearthur.com.br>
 *
 * Settings that will be used on gulp tasks
 *
 */

/**
 * Paths for source files and generated assets
 */
 var paths = {
    src: {
        fonts: 'src/fonts/**/*.{otf,eot,ttf,woff,woff2}',
        images: 'src/images/**/*.{png,jpg,jpeg,gif,bmp}',
        scripts: 'src/js/**/*.js',
        scriptsEach: 'src/js/**/[^_]*.js',
        scriptsConcat: 'src/js/**/_*.js',
        pluginsCSS: ['src/plugins-css/**/*.css', 'public/semantic/dist/semantic.css'],
        pluginsJS: ['src/plugins-js/**/*.js', 'public/semantic/dist/semantic.js'],
        pluginsIMG: 'src/plugins-images/**/*.{png,jpg,jpeg,gif,bmp}',
        scss: 'src/scss/**/*.scss',
        sprites: 'src/sprites/**/*.png'
    },
    srcFolder: {
        fonts: 'src/fonts',
        images: 'src/images',
        scripts: 'src/js',
        pluginsCSS: 'src/plugins-css',
        pluginsJS: 'src/plugins-js',
        pluginsIMG: 'src/plugins-images',
        scss: 'src/scss',
        sprites: 'src/sprites'
    },
    dist: {
        fonts: 'public/assets/fonts',
        images: 'public/assets/images',
        scripts: 'public/assets/js',
        css: 'public/assets/css'
    },
    appView: [ 'app/templates/**/*.{php,html,phtml,twig}' ]
};

/**
 * Overrides for the 'main' entry on 'bower.json' files of plugins commonly used (by me)
 */
 var bowerOverrides = {
    overrides: {
        'fancybox': {
            main: [
            'dist/jquery.fancybox.js',
            'dist/jquery.fancybox.css'
            ]
        },
        'tipsy': {
            main: [
            'src/stylesheets/tipsy.css',
            'src/javascripts/jquery.tipsy.js',
            'src/images/tipsy.gif'
            ]
        },
        'jquery-slimscroll': {
            main: [
            'jquery.slimscroll.js'
            ]
        },
        'jQuery.Marquee': {
            main: [
            'jquery.marquee.js'
            ]
        },
        'jquery-snowfall': {
            main: [
            'src/snowfall.jquery.js'
            ]
        },
        'truncate': {
            main: [
            'dist/truncate.js'
            ]
        },
        'materialize': {
            main: [
            'bin/materialize.css',
            'bin/materialize.js' ,
            'fonts/roboto/Roboto-Bold.eot',
            'fonts/roboto/Roboto-Bold.ttf',
            'fonts/roboto/Roboto-Bold.woff',
            'fonts/roboto/Roboto-Bold.woff2',
            'fonts/roboto/Roboto-Light.eot',
            'fonts/roboto/Roboto-Light.ttf',
            'fonts/roboto/Roboto-Light.woff',
            'fonts/roboto/Roboto-Light.woff2',
            'fonts/roboto/Roboto-Medium.eot',
            'fonts/roboto/Roboto-Medium.ttf',
            'fonts/roboto/Roboto-Medium.woff',
            'fonts/roboto/Roboto-Medium.woff2',
            'fonts/roboto/Roboto-Regular.eot',
            'fonts/roboto/Roboto-Regular.ttf',
            'fonts/roboto/Roboto-Regular.woff',
            'fonts/roboto/Roboto-Regular.woff2',
            'fonts/roboto/Roboto-Thin.eot',
            'fonts/roboto/Roboto-Thin.ttf',
            'fonts/roboto/Roboto-Thin.woff',
            'fonts/roboto/Roboto-Thin.woff2'
            ]
        },
        'font-awesome': {
            main: [
            'css/font-awesome.css',
            'fonts/*'
            ]
        },
        'nivo-slider': {
            main: [
            'nivo-slider.css',
            'jquery.nivo.slider.js'
            ]
        },
        'jquery-ui': {
            main: [
            'jquery-ui.js',
            'themes/base/jquery-ui.css'
            ]
        },
        'bootstrap': {
            main: [
            'dist/css/bootstrap.css',
            'dist/js/bootstrap.js'
            ]
        },
        'jvectormap': {
            main: [
            'jquery-jvectormap.css',
            'jquery-jvectormap.js'
            ]
        },
        'select2': {
            main: [
            'dist/css/select2.css',
            'dist/js/select2.js'
            ]
        },
        'inputmask': {
            main: [
            'dist/jquery.inputmask.bundle.js'
            ]
        },
    }
};

module.exports = {
    paths: paths,
    bowerOverrides: bowerOverrides
};
