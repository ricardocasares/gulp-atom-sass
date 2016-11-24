module.exports = {
  name: 'ac:sass',
  help: 'Compiles SASS, adds vendor prefixes and minifies CSS',
  task: require('./task'),
  watch: require('./watch'),
  config: require('./config')
}
