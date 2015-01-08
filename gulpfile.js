var gulp=require('gulp');
var browserify=require('browserify');
var source=require('vinyl-source-stream');
var uglify=require('gulp-uglify');
var streamify=require('gulp-streamify');

gulp.task('js_dev',function(){
	return browserify('./app.js',{debug:true})
			.bundle()
			.pipe('bundle.js')
			.dest('.');
});

gulp.task('js_prod',function(){
	return browserify('./app.js',{debug:true})
			.bundle()
			.pipe(streamify(uglify))
			.pipe('bundle.js')
			.dest('.');
});