
const gulp = require('gulp');
//sass 转 css
const sass = require('gulp-sass');

// 编译sass
gulp.task('css', () => {
  return gulp.src('./src/styles/**.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('default', gulp.series('css'));