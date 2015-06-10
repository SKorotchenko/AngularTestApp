var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var exec = require('child_process').exec;

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check', 'install-plugins'], function() {
    exec('npm install', function (err, stdout, stderr) {
        console.log(stdout);
        //console.log(stderr);
        //cb(err);
    });

    return bower.commands.install()
        .on('log', function(data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});
gulp.task('install-plugins', function(){
    var plugins = [
        'com.ionic.keyboard',
        'org.apache.cordova.device',
        'org.apache.cordova.splashscreen',
        'org.apache.cordova.statusbar'
    ];
    for (var i = 0; i < plugins.length; i++) {
        exec('cordova plugin add '+plugins[i], function (err, stdout, stderr) {
            console.log(stdout);
            //console.log(stderr);
            //cb(err);
        });
    }
});
gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('ngdocs', [], function () {
    var gulpDocs = require('gulp-ngdocs');
    var options = {
        //scripts: ['../app.min.js'],
        html5Mode: false,
        startPage: '/'
        //title: "My Awesome Docs",
        //image: "path/to/my/image.png",
        //imageLink: "http://my-domain.com",
        //titleLink: "/api"
    };
    return gulp.src('./www/js/modules/**/*.js')
        .pipe(gulpDocs.process(options))
        .pipe(gulp.dest('./docs'));
});