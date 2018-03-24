var gulp = require("gulp");
var ts = require("gulp-typescript");

var tsProject = ts.createProject("tsconfig.json");

var typeScriptTask = function(){

    console.log("---------------------TYPESCRIPT TASK!-----------------------");

    return tsProject.src()
    .pipe(tsProject())
    .js
    .pipe(gulp.dest("dist"));

}

gulp.task('type-script', typeScriptTask);

module.exports = typeScriptTask;