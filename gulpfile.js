'use strict';

const gulp = require('gulp');
const requireDir = require('require-dir');

// Require all tasks.
requireDir('./gulp/tasks', { recurse: true });

// Commonly used tasks defined here.
gulp.task('default', gulp.series(
	'clean',
	gulp.parallel(
		'pug:dev',
		'sass',
		'scripts',
		'images',
		'fonts',
		// 'favicon',
	),
	gulp.parallel('watch', 'server')));

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel(
    'pug:prod',
    'sass',
    'scripts',
    'images',
    'fonts',
    // 'favicon',
  ),
  gulp.parallel('watch', 'server')));
