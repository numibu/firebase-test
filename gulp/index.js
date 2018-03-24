var gulp = require("gulp");

/**
 * 
 * @argument {Array<string>} tasks - array of tasks.
 */
module.exports = function(tasks) {
    tasks.forEach(function(name){
        gulp.task(name, require("./tasks/" + name));
    });
    return gulp;
};
