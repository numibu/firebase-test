var gulp = require("gulp");

var helloWordTask = function(){

    console.log("---------------------HELLO WORD!-----------------------");
    /*return gulp.src([paths.src, '*!README.md'])
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())*/


}

gulp.task('hello-world-task', helloWordTask);

module.exports = helloWordTask;