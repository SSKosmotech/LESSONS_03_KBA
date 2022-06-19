// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
//   }
  
//   exports.default = defaultTask


const gulp        = require('gulp');
const browserSync = require('browser-sync').create();

// Static server
// gulp.task('browser-sync', function() {
gulp.task('serve', function() {
    browserSync.init({
        server: {
            // baseDir: "./src"
            baseDir: "./dist"
        }
    });
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('move-html', function(){
  return gulp
             .src('src/*.html')
             .pipe(gulp.dest('dist/'));

});