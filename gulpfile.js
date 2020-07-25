const { series, src, dest, rename, run }  = require('gulp');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const imagemin = require('gulp-imagemin');

// 压缩js
function minifyJs() {
  return src(['build/*.js', '!build/**/vanilla-tilt.min.js'], {base: './'})
    .pipe(uglify({
      compress: true,//类型：Boolean 默认：true 是否完全压缩
    }))
    .pipe(dest('public/'))
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
  return src('build/*.css', {base: './'})
    .pipe(cssmin())
    .pipe(dest('public/'))
}

function minifyhtml() {
  return src('./build/**/*.html')
    .pipe(htmlmin({
      removeComments: true,       // 清除HTML注释
      collapseWhitespace: true,   // 压缩HTML
      // minifyJS: true,             // 压缩页面JS
      // minifyCSS: true             // 压缩页面CSS
    }))
    .pipe(dest('public/'));
}


// exports.build = parallel(minifyhtml)
// series 顺序执行任务
// parallel最大并大执行任务
exports.default = series(minifyhtml, minCss, minifyJs);
// exports.build = series(minifyhtml, minCss, minifyJs, copy);