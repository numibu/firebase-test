var pathModule = require('path');
var gulp = require('gulp');

/**
 * 
 * @param {string} path - path to output dir
 */
module.exports = function tasksPath( path ) {
  return gulp.dest(pathModule.normalize(path), {cwd: path})
}