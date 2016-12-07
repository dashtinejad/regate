import gulp from 'gulp'
import babel from 'gulp-babel'
import webpack from 'webpack-stream'
import browserSync from 'browser-sync'
import webpackConfig from './webpack.config.babel'

const paths = {
  allSrcJs: 'src/**/*.js?(x)',
  distDir: './distrubution'
}

gulp.task('build', () =>
  gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.distDir))
)

gulp.task('watch', () => 
  gulp.watch(paths.allSrcJs, ['build'])
)

gulp.task('default', ['build', 'watch'])
