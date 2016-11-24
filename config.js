module.exports = {
  src: 'src/app.scss',
  dest: 'build/',
  sass: {
    outputStyle: 'compressed',
    onError: errorHandler
  },
  autoprefixer: {
    browsers: 'last 2 versions',
    cascade: false,
    onError: errorHandler
  },
  sourcemaps: {
    init: {},
    write: '.'
  }
}

function errorHandler (error) {
  console.log(error)
  this.emit('end')
}
