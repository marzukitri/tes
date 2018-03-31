var gulp = require('gulp')
var config = require('./gulpfile.config')
var inject = require('gulp-inject')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var runSequence = require('run-sequence')

gulp.task('default', function (callback) {
  runSequence('dev', 'build', callback)
  console.log('DONE')
})

gulp.task('inject-html', function () {
  return gulp.src('./index.tpl.html')
    .pipe(inject(gulp.src(config.dev.css.concat(config.dev.js), {
      read: false
    })))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('.'))
})

gulp.task('watch', function() {
  gulp.watch('./*.js', ['inject-html'])
  gulp.watch('./feature/Home/controller.js', ['inject-html'])
})

gulp.task('dev', [
  'inject-html',
  'watch'
])

gulp.task('build',[
  'inject-html'
])