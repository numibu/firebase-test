var gulp = require("gulp");
var ts = require("gulp-typescript");
var path = require("path");
var tasksPath = require("../lib/tasksPath");

var tsProject = ts.createProject(process.cwd()+"/tsconfig.json");

var typeScriptTask = function() {
    console.log("---------------------TYPESCRIPT TASK!-----------------------");
    return tsProject.src()
    .pipe(tsProject())
    .js.pipe(tasksPath('mydirectory')) ; 
}

gulp.task('type-script', typeScriptTask);

module.exports = typeScriptTask;