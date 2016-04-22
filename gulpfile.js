var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var cordova = require('gulp-cordova');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var del = require('del');

var paths = {
    sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);
gulp.task('install', ['git-check', 'install-bower', 'clean-platforms', 'clean-plugins', 'cordova:init-plugins']);

gulp.task('sass', function (done) {
    gulp.src('./scss/ionic.app.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./scss/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('./scss/css/'))
        .on('end', done);
});

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
});


gulp.task('install-bower', function () {
    return bower.commands.install()
        .on('log', function (data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('clean-plugins', function () {
    return del(['plugins']);
});

gulp.task('clean-platforms', function () {
    return del(['platforms']);
});

gulp.task('cordova:init-plugins', function (done) {
    //required timeout after deleting files
    setTimeout(function() {
        gulp
            .src('./package.json')
            .pipe(cordova())
            .on('end', done);
    }, 500);

});

gulp.task('git-check', function (done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});
