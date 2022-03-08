const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp
    .src('./src/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
}

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
};

// execution: cmd|$ gulp buildStyles

// about outputStyle
// https://github.com/sass/node-sass#outputstyle
// nested, expanded, compact, compressed
