const bulkSass = require('gulp-sass-bulk-import')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const cssmin = require('gulp-cssnano')
const replace = require('gulp-replace')
const rename = require('gulp-rename')
const watch = require('gulp-watch')
const gutil = require('gulp-util')
const exit = require('gulp-exit')
const sass = require('gulp-sass')
const gulp = require('gulp')

const minifyCss = true


/* *************************
    GULP
************************* */
gulp.task('default', [
  'sass-watch',
  'Cache-Versioning',
])

gulp.task('Cache-Versioning', () => (
  gulp.src('public/OneSignalSDKWorker.js')
    .pipe(replace(/tdesfossez-cache-(\d+)/g, (match, number) => {
      const version = Number(number) + 1

      console.log(`CACHE_NAME version: ${version}`)

      return `tdesfossez-cache-${version}`
    }))
    .pipe(gulp.dest('public/'))
    .pipe(exit())
))

gulp.task('sass', () => {
  let cssRefactoring = ''

  if (minifyCss) {
    cssRefactoring = cssmin()
  } else {
    cssRefactoring = gutil.noop()
  }

  gulp.src('src/sass/bulma.sass')
    .pipe(sourcemaps.init())
    .pipe(bulkSass())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: [
        'last 2 versions',
      ],
    }))
    .pipe(cssRefactoring)
    .pipe(sourcemaps.write('.'))
    .pipe(rename({
      dirname: '',
    }))
    .pipe(gulp.dest('public/css/'))
})

gulp.task('sass-dist', () => (
  gulp.src('src/sass/bulma.sass')
    .pipe(bulkSass())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: [
        'last 2 versions',
      ],
    }))
    .pipe(rename({
      dirname: '',
    }))
    .pipe(gulp.dest('dist/css/'))
))

gulp.task('sass-watch', [
  'sass',
  'sass-dist',
])

watch(['./src/**/*.sass', './src/**/*.scss'], () => (
  gulp.start('sass-watch')
))
