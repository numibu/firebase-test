
var gulp = require('./gulp') // my gulp

gulp = gulp([
                'hello-world-task',
                'type-script',
                'browserify_ts']) // gulp

gulp.task('default',['hello-world-task','type-script']);
gulp.task('xxx',['browserify_ts']);