import gulp from 'gulp';
import babel from 'gulp-babel';
import webpack from 'webpack-stream';
import browserSync from 'browser-sync';
import webpackConfig from './webpack.config.babel';

const paths = {
    allSrcJs: 'src/**/*.js?(x)',
    clientEntryPoint: 'src/app.jsx',
    distDir: 'wwwroot/dist',
};

gulp.task('build', () =>
    gulp.src(paths.clientEntryPoint)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(paths.distDir))
);

gulp.task('watch', () => 
    gulp.watch(paths.allSrcJs, ['build'])
);

var server = browserSync.create();
gulp.task('server', () => 
    server.init({
        port: 10637,
        ui: false,
        server: {
            baseDir: ['./wwwroot/'],
            index: 'index.html'
        }
    })
);

gulp.task('serverBrowserSync', () =>
    server.reload()
);

gulp.task('server:watch', () => 
    gulp
        .watch(['./wwwroot/**/*'], ['serverBrowserSync'])
);

gulp.task('default', ['build', 'watch', 'server', 'server:watch']);
