var   	gulp = require("gulp"),
		livereload = require("gulp-livereload"),
		sass = require("gulp-sass"),
		autoprefixer = require("gulp-autoprefixer"),
		cleanCSS = require("gulp-clean-css"),
		rename = require("gulp-rename");

gulp.task('action', function() {

	gulp.src('./assets/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({

			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./assets/css/'))
		.pipe(cleanCSS({
			compatibility: 'ie8'
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./media/css'))
		.pipe(livereload());
});


gulp.task('default', function() {
	livereload.listen();
	gulp.watch('./assets/scss/*scss', ['action']);
	gulp.watch('./assets/scss/*.scss', ['action']);
});
