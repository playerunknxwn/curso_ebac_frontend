const gulp = require('gulp')
const sass = require('gulp-sass')(require("sass"))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function compila_sass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'))
}

function comprime_imgs() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function comprime_js() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

exports.default = function () {
    gulp.watch('./source/styles/main.scss', { ignoreInitial: false }, gulp.series(compila_sass))
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprime_imgs))
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprime_js))
}
