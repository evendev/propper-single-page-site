var rsync = require('rsyncwrapper').rsync;
var yargs = require('yargs').argv;

var gulp = require('gulp');
var gutil = require('gulp-util');
var shell = require('gulp-shell');

var secrets = require('secrets.json');


gulp.task('rsync', function() {

  var env = yargs.env || 'dev';
  var rsyncDest = secrets.servers[env].rsyncDest;

  rsync({
    ssh: true,
    src: './www/',
    dest: rsyncDest,
    recursive: true,
    syncDest: true,
    args: ['--verbose']
  }, function(error, stdout, stderr, cmd) {
    gutil.log(stdout);
  });

});