# gulp-boilerplate
A gulp boilerplate built for use in web development

### Installation

```sh
$ git clone https://github.com/henriquearthur/gulp-boilerplate.git
$ yarn install
$ gulp
```

### Settings

#### .env file
You need to define two variables on your .env file, `ENVIRONMENT` and `DOMAIN`. More information on `.env.example`

More information about .env [here](https://www.npmjs.com/package/dotenv "dotenv package on npm")

#### paths
Set the paths for your source assets (SCSS, Images, JS, etc), generated assets (CSS, Compressed images, Minified JS, etc) on `gulp/config.js`

The `appView` array is the path of your HTML, PHP, etc files that contains your front-end code. It will be passed to BrowserSync so you can use Live Reload. Files that are on the directories defined on `appView` will be live reloaded when modified.

### Babel (ES6) support and Browserify
You can put your ES6 (or other [Babel](https://babeljs.io) preset) code on the `src/js/app.js` (or your custom path for `src.scriptsES6`) and it will be compiled to `public/assets/bundle.js` (or your custom path for `dist.scripts` - but the filename remains `bundle.js`, if you want to change that, you'll need to edit the `build:es6` task [`gulp/tasks/es6.js`]).


[Browserify](http://browserify.org) is supported as well, which means you can `require` your modules on your ES6 code.

You can use plain JavaScript as well. Any files on `src/js` folder (or your custom path) will be minified (if in production) and copied to `public/assets` folder. **Except `app.js`, which is reserved for ES6/Babel**.

### How to generate Sprites
The images inside `src/sprites` (or your custom path for sprites folder) will be transformed into a `sprite.png` image on `assets/images` (or your custom path for `dist.images` folder). You can also use a structure like the one above to organize your images, it won't affect the task.

Example:

    └── sprites
        ├── albums
        │   ├── hello.png
        │   └── miss_you.png
        └── icons
            ├── facebook.png
            └── twitter.png

The example above will generate two sprite images: `albums.png` and `icons.png`  on `public/assets/images` folder (or the folder you provided on `config.js` for `dist.images`).

Will also generate a `_sprite.css` file on `src/scss/_sprite.css` which I recommend you to include on your SASS/SCSS files using

    @import "_sprite"
