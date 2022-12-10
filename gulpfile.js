'use strict';
// generated on 2014-07-15 using generator-gulp-webapp 0.1.0

var gulp = require('gulp');
var critical = require('critical');

// -----------------------------------------------------------------------------
// Generate critical-path CSS
//
// This task generates a small, minimal amount of your CSS based on which rules
// are visible (aka "above the fold") during a page load. We will use a Jekyll
// template command to inline the CSS when the site is generated.
//
// All styles should be directly applying to an element visible when your
// website renders. If the user has to scroll even a small amount, it's not
// critical CSS.
// -----------------------------------------------------------------------------
gulp.task('critical', function (done) {
  critical.generate({
    base: 'public/',
    src: 'index.html',
    dimensions: [{
      width: 320,
      height: 480
    },{
      width: 768,
      height: 1024
    },{
      width: 1280,
      height: 960
    }],
    dest: '../themes/namrider/static/critical/critical.css',
    minify: true,
    extract: false,
    ignore: ['font-face']
  });
  done();
});