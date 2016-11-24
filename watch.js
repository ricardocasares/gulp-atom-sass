module.exports = function (gulp, cfg, name) {
  return () => gulp.watch(cfg.src, [name])
}
