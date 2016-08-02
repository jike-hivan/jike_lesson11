var gulp = require('gulp');
var sass = require('gulp-sass');
var rev = require('gulp-rev');
var revC = require('gulp-rev-collector');
var mincss = require('gulp-minify-css');

var paths = {
  sass: './app/sass/*.scss',
  html: './app/*.html'
}

gulp.task('sass', function() {
  return gulp.src('./app/sass/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(mincss())
    .pipe(rev())
    .pipe(gulp.dest('./dist/stylesheets'))
    .pipe(rev.manifest('css.json'))
    .pipe(gulp.dest('./rev'));
});

gulp.task('css', function(){
  return gulp.src(['./rev/*.json', './dist/stylesheets/*.css'])
    .pipe(revC())
    .pipe(gulp.dest('./dist/stylesheets'))
});

gulp.task('rev', function(){
  return gulp.src(['./rev/*.json', './app/*.html'])
    .pipe(revC())
    .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function(){
  gulp.watch(paths.sass, ['sass']),
  gulp.watch(paths.html, ['rev'])
});


gulp.task('default', ['sass', 'css', 'rev', 'watch'], function() {

})
