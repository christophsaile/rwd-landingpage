const gulp = require('gulp');
const runSequence = require('run-sequence');
gulp.tasks = require('@biotope/build');

gulp.task('build:netlify', function(callback) {
	console.log('gulpfile');
	runSequence(
		['clean:dist', 'build:dev'],
		['copy:dev:resources:js'],
		['useref'],
		[
			'useref:assets',
			'image:resources:dist',
			'image:component:dist',
			'favicons'
		],
		[
			'copy:dist:resources:js',
			'copy:dist:resources:react',
			'copy:dist:resources:ts-js',
			'copy:dist:resources:json',
			'copy:dist:resources:fonts',
			'copy:dist:resources:img',
			'copy:dist:resources:assets',
			'copy:dist:resources:css',
			'copy:dist:resources:components',
			'copy:dist:resources:hbs',
			'copy:dist:component:mock',
			'copy:dist:components:files',
			'copy:dist:config',
			'copy:dist:mock',
			'copy:dist:assets',
			'copy:dist:svgSprite'
		],
		[
			'uglify:resources:dist',
			'uglify:components:dist',
			'cleanCss:resources:dist',
			'cleanCss:components:dist'
		],
		['inject', 'clean:useref', 'cssstats', 'version'],
		['clean:index', 'rename:files'],
		callback
	);
});
gulp.task('clean:index', function(cb) {
	const del = require('del');
	del.sync('./dist/index.html');

	cb();
});

gulp.task('rename:files', function(cb) {
	const rename = require('gulp-rename');
	const del = require('del');
	const vinylPaths = require('vinyl-paths');

	gulp.src('./dist/01site*')
		.pipe(vinylPaths(del))
		.pipe(
			rename(function(opt) {
				if (opt.basename === '01site.01master') {
					opt.basename = 'index';
					return opt;
				}

				if (opt.basename === '01site.404') {
					opt.basename = '404';
					return opt;
				}
				
				opt.basename = opt.basename.replace(/01site.0[0-9]+/, '');
				return opt;
			})
		)
		.pipe(gulp.dest('./dist'));

	cb();
});
