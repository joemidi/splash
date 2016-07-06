'use strict';

var gulp  = require('gulp');
var execSync = require('child_process').execSync;

gulp.task('deploy', ['prod'], function() {
  execSync(['bash gulpfile.js/lib/deploy.sh'], { stdio: 'inherit' });
});
