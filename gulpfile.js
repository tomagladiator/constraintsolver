var bulkSass     = require('gulp-sass-bulk-import');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var cssmin       = require('gulp-cssnano');
var replace      = require('gulp-replace');
var rename       = require("gulp-rename");
var watch        = require('gulp-watch');
var gutil        = require('gulp-util');
var sass         = require('gulp-sass');
var gulp         = require('gulp'); 
var minify_css  = true;




/* *************************
    FUNCTIONS
************************* */
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}





/* *************************
    GULP
************************* */
gulp.task('default', [
    'sass-watch',
    'Cache-Versioning'
], function() {
});

gulp.task('Cache-Versioning', function () {
    gulp.src('public/OneSignalSDKWorker.js')
        .pipe(replace(/tdesfossez-cache-(\d+)/g, function (match, number) {
            var version = Number(number) + 1;
            console.log('CACHE_NAME version: ' + version);
            return 'tdesfossez-cache-' + version;
        }))
        .pipe(gulp.dest('public/'));
});

gulp.task('sass', function () {
    if(minify_css){
        var css_refactoring = cssmin();
    } else {
        var css_refactoring = gutil.noop();
    }

    return gulp.src('src/sass/bulma.sass')
        .pipe(sourcemaps.init())
        .pipe(bulkSass())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(css_refactoring)
        .pipe(sourcemaps.write('.')) 
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('public/css/'))
});

gulp.task('sass-dist', function () {
    return gulp.src('src/sass/bulma.sass')
        .pipe(bulkSass())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('sass-watch', [
    'sass',
    'sass-dist',
], function() {
});

watch(['./src/**/*.sass', './src/**/*.scss'], function() {
    gulp.start('sass-watch');
});