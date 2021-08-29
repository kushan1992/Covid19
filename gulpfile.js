const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
//const purify = require('gulp-purifycss');

const { reload } = browserSync;

gulp.task('sass', () => (
  gulp
    .src(['src/assets/sass/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('src/assets/css'))
    .pipe(browserSync.stream())
));


gulp.task('serve', gulp.series(['sass'], () => {
  gulp.watch('src/assets/sass/**/*.scss', gulp.parallel(['sass']));
  gulp.watch(['src/**/*.js','src/**/*.jsx']).on('change', reload);
}));

gulp.task('default', gulp.series(['serve']));
