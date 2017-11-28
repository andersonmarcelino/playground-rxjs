var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    source = require("vinyl-source-stream"),
    browserify = require("browserify"),
    whatchify = require("watchify"),
    babelify = require("babelify");

gulp.task("server", () => {
  return gulp.src("./src-server/**/*.js")
         .pipe($.cached("server"))
         .pipe($.babel())
         .pipe(gulp.dest("./build"));
});

gulp.task("server:watch",gulp.series(
  "server",
  () => {
    return gulp.watch("./src-server/**/*.js", gulp.series("server"));
  }
));
