// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./style/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
        //.pipe(gulp.dest('./Content/'));
});

gulp.task('default', ['sass'], function() {
    gulp.watch('./style/*.scss', ['sass']);
})