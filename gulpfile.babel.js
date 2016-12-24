import gulp from 'gulp'
import babel from 'gulp-babel'
import webpack from 'webpack-stream'
import webpackConfig from './webpack.config.babel';

const paths = {
  allSrcJs: 'src/**/*.js?(x)',
  clientEntryPoint: 'src/index.js',
  distDir: './distrubution'
}

gulp.task('build', ['build:commonjs', 'build:umd'])

gulp.task('build:commonjs', () =>
  gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.distDir))
)

gulp.task('build:umd', () =>
  gulp.src(paths.clientEntryPoint)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(''))
)

gulp.task('build:watcher', () => 
  gulp.watch(paths.allSrcJs, ['build'])
)

gulp.task('default', ['build', 'build:watcher'])
