# gulp-boilerplate
A gulp boilerplate built for use in web development

### Installation

```sh
$ git clone https://github.com/henriquearthur/gulp-boilerplate.git
$ npm install
$ gulp
```

### Settings

#### .env file
You need to define two variables on your .env file, `ENVIRONMENT` and `DOMAIN`. More information on `.env.example`

More information about .env [here](https://www.npmjs.com/package/dotenv "dotenv package on npm")

#### paths
Set the paths for your source assets (SCSS, Images, JS, etc), generated assets (CSS, Compressed images, Minified JS, etc) on `gulp/config.js`

The `appView` array is the path of your HTML, PHP, etc files that contains your front-end code. It will be passed to BrowserSync so you can use Live Reload. Files that are on the directories defined on `appView` will be live reloaded when modified.


### How to generate Sprites
The images inside `src/sprites` (or your custom path for sprites folder) will be transformed into a `sprite.png` image on `assets/images` (or your custom path for dist-images folder). You can also use a structure like the one above to organize your images, it won't affect the task.

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
