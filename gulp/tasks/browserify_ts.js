
var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var tasksPath = require("../lib/tasksPath");
var path = require("path");


var browserify_ts = function(){
    const path_to_src_ts = path.normalize(global.process.cwd() + '/src/**/*.ts');
    debugger;
    let bif =  browserify({
        //basedir: '.',
        debug: true,
        entries: [path_to_src_ts],
        cache: {},
        pacageCache: {}
    });
    let a1 = bif.plugin(tsify);
    let a2 = a1.bundle()
    let a3 = a2.pipe(source('bundle.js'))
    let a4 = a3.pipe(gulp.dest(tasksPath('dist')));
    1+1;
}

gulp.task('browserify_ts', browserify_ts);

module.exports = browserify_ts;
