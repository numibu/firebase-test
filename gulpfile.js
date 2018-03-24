
var gulp = require('./gulp') // my gulp

gulp = gulp(['hello-world-task','type-script']) // gulp

gulp.task('default',['hello-world-task','type-script'])