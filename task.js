module.exports = (gulp, cfg) => () => {
  const sass = require('gulp-sass')
  const prefix = require('gulp-autoprefixer')
  const sourcemaps = require('gulp-sourcemaps')

  return gulp
    .src(cfg.src)
    .pipe(sourcemaps.init(cfg.sourcemaps.init))
    .pipe(sass(cfg.sass).on('error', cfg.sass.onError))
    .pipe(prefix(cfg.autoprefixer).on('error', cfg.autoprefixer.onError))
    .pipe(sourcemaps.write(cfg.sourcemaps.write))
    .pipe(gulp.dest(cfg.dest))
}
