const gulp = require('gulp'),
watch = require('gulp-watch');
gulp.task('default', function() {
  console.log("Hooray! you created a gulp task!");
});

gulp.task('html', function() {
  console.log("Something else is being done");
});

gulp.task('styles', function() {
  console.log("Saas or PostCSS is running here.");
});

gulp.task('watch', function functionName() {
  watch('./app/index.html', function functionName() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles')
  })
});
