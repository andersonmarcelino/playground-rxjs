var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    source = require("vinyl-source-stream"),
    browserify = require("browserify"),
    watchify = require("watchify"),
    babelify = require("babelify"),
    path = require("path"),
    fs = require("fs");

gulp.task("server", () => {
  return gulp.src("./src-server/**/*.js")
         .pipe($.cached("server"))
         .pipe($.babel())
         .pipe(gulp.dest("./build"));
});

gulp.task("server:watch",gulp.series(
  "server",
  () => gulp.watch("./src-server/**/*.js", gulp.series("server"))
));

gulp.task("client:watch", () => {
  const files = fs.readdirSync("./src-client");
  for(let i = 0; i< files.length; i++){
    const file = files[i];
    if (path.extname(file) !== ".js") continue;

    initBundlerWatch(path.join("src-client", file));
  }

  return gulp.watch("./src-client/**/*.js")
        .on("change", initBundlerWatch);
});

gulp.task("watch", gulp.parallel("client:watch","server:watch"));

let bundlers = {};
function initBundlerWatch(file) {
  if (bundlers.hasOwnProperty(file)) return;

  const bundler = createBundler(file);
  bundlers[file] = bundler;
  const watcher = watchify(bundler);
  const filename = path.basename(file);

  function bundle() {
    return bundler
      .bundle()
      .on("error", error => console.error(error))
      .pipe(source(filename))
      .pipe(gulp.dest("./public/build"));
  }

  watcher.on("update", bundle);
  watcher.on("time", time => console.log(`built client in ${time}ms`));

  bundle();
}

function createBundler(file) {
  const bundler = browserify(file);
  bundler.transform(babelify);
  return bundler;
}
