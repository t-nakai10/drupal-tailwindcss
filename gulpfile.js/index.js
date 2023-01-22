process.env.NODE_CONFIG_DIR = `${__dirname}/config/`;

const browsersync = require('browser-sync');

const cssBlobs = 'app/{modules,themes}/custom/**/css/**/*.css';
const twigGlobs = 'app/{modules,themes}/custom/**/templates/**/*.html.twig';
const tailwindCssGlobs = 'app/themes/custom/*/css/**/*.css.tailwind';
const tailwindCssDist = 'app/themes/custom/';

const { dest, parallel, series, src, watch } = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

const host = process.env.DDEV_HOSTNAME;

// Tasks.
function browsersyncStart(cb) {
  browsersync.create();
  browsersync.init({
    server: false,
    // 未ログイン.
    // proxy: {
    //   target: 'localhost',
    // },
    proxy: host,
    host: host,
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

function buildCss() {
  return src(tailwindCssGlobs)
    .pipe(postcss())
    .pipe(
      rename((path) => {
        path.extname = path.extname.replace(/^\.tailwind$/, '');
      }),
    )
    .pipe(dest(tailwindCssDist));
}
// 一度生成された tailwind のCSSが消えない問題をコマンドで解消.
exports['build:css'] = buildCss;

// cssファイルの監視.
function watchCss(cb) {
  watch(cssBlobs);
  cb();
}

// tailwindファイルの監視.
function watchTailwindCss(cb) {
  watch(tailwindCssGlobs, parallel(buildCss, browsersyncReload));
  cb();
}

function watchTailwindTwig(cb) {
  watch(twigGlobs, series(buildCss, browsersyncReload));
  cb();
}

// Default task.
const defaultWatch = series(watchCss, watchTailwindCss, watchTailwindTwig);
exports.default = series(browsersyncStart, defaultWatch);
