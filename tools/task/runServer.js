
var gulp = require('gulp');
var cp = require('child_process');
var cfg = require('../../config');

gulp.task('runServer', ['build'], function(cb){
	cp.fork('build/' + cfg.__global.NODE_ENV + '/server/' + cfg.__server.index, { slient: false })
	console.log('done!');
})
