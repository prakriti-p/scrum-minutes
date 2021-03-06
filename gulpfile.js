var gulp = require("gulp");
var nodemon = require("gulp-nodemon"); 
var gulpMocha = require("gulp-mocha");
var supertest = require('supertest');
var env = require('gulp-env');

gulp.task('default', function() {
    nodemon({
        script: 'app.js',   //what to run
        //ext: 'js',   //what to watch for
        env: {
            PORT: 8000
        },
        //ignore: ['./node_modules/**','./Controllers/**','./models/**','./Routes/**']
        ignore: ['./node_modules/**']
    })
    .on('restart', function() {
        console.log("Restarting...");
    });
});

gulp.task('test', function() {
    env({vars: {ENV: 'Test'}});
    gulp.src('Tests/*.js', {read: false})
    .pipe(gulpMocha({reporter: 'nyan'}));
});