const { series, src, dest, rename, run }  = require('gulp');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const imagemin = require('gulp-imagemin');
// const copyFile = require('gulp-copy');

// 压缩js
function minifyJs() {
  return src(['./build/**/*.js', '!./build/**/vanilla-tilt.min.js'])
    .pipe(uglify())
    .pipe(dest('public/js/'))
}

// 转移不需要打包的js文件
function copy() {
  return src('./build/**/vanilla-tilt.min.js')
    .pipe(dest('public/js/'))
}

// 压缩图片
function imgMin() {
  return src('./static/**/**')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
  ]))
  .pipe(dest('public/img/'))
}

// 压缩css
function minCss() {
  return src('./build/**/*.css')
    .pipe(cssmin())
    .pipe(dest('public/css/'))
}

function minifyhtml() {
  return src('./build/**/*.html')
    .pipe(htmlmin({
      removeComments: true,       // 清除HTML注释
      collapseWhitespace: true,   // 压缩HTML
      minifyJS: true,             // 压缩页面JS
      minifyCSS: true             // 压缩页面CSS
    }))
    .pipe(dest('public/'));
}

// function css(cb) {
//   cb()
  
// }

// function html(cb) {
//   cb()

// }

// exports.build = parallel(minifyhtml)
// series 顺序执行任务
// parallel最大并大执行任务
exports.default = series(minifyhtml, minCss, minifyJs, copy);
// exports.build = series(minifyhtml, minCss, minifyJs, copy);