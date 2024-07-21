/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...path]': RouteRecordInfo<'/[...path]', '/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/about/': RouteRecordInfo<'/about/', '/about', Record<never, never>, Record<never, never>>,
    '/archives/': RouteRecordInfo<'/archives/', '/archives', Record<never, never>, Record<never, never>>,
    '/archives/[year]/': RouteRecordInfo<'/archives/[year]/', '/archives/:year', { year: ParamValue<true> }, { year: ParamValue<false> }>,
    '/archives/[year]/[month]/': RouteRecordInfo<'/archives/[year]/[month]/', '/archives/:year/:month', { year: ParamValue<true>, month: ParamValue<true> }, { year: ParamValue<false>, month: ParamValue<false> }>,
    '/categories/': RouteRecordInfo<'/categories/', '/categories', Record<never, never>, Record<never, never>>,
    '/categories/[...its]': RouteRecordInfo<'/categories/[...its]', '/categories/:its(.*)', { its: ParamValue<true> }, { its: ParamValue<false> }>,
    '/links/': RouteRecordInfo<'/links/', '/links', Record<never, never>, Record<never, never>>,
    '/page/[page]': RouteRecordInfo<'/page/[page]', '/page/:page', { page: ParamValue<true> }, { page: ParamValue<false> }>,
    '/plan/': RouteRecordInfo<'/plan/', '/plan', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/auxiliarry-in': RouteRecordInfo<'/posts/music/guitar/kpa/auxiliarry-in', '/posts/music/guitar/kpa/auxiliarry-in', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/external-effects': RouteRecordInfo<'/posts/music/guitar/kpa/external-effects', '/posts/music/guitar/kpa/external-effects', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/input': RouteRecordInfo<'/posts/music/guitar/kpa/input', '/posts/music/guitar/kpa/input', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/looper': RouteRecordInfo<'/posts/music/guitar/kpa/looper', '/posts/music/guitar/kpa/looper', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/mode-performance-baisc': RouteRecordInfo<'/posts/music/guitar/kpa/mode-performance-baisc', '/posts/music/guitar/kpa/mode-performance-baisc', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/mode-performance-edit': RouteRecordInfo<'/posts/music/guitar/kpa/mode-performance-edit', '/posts/music/guitar/kpa/mode-performance-edit', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/mode-performance-midi': RouteRecordInfo<'/posts/music/guitar/kpa/mode-performance-midi', '/posts/music/guitar/kpa/mode-performance-midi', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/noise-gate': RouteRecordInfo<'/posts/music/guitar/kpa/noise-gate', '/posts/music/guitar/kpa/noise-gate', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/output': RouteRecordInfo<'/posts/music/guitar/kpa/output', '/posts/music/guitar/kpa/output', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/parallel-path': RouteRecordInfo<'/posts/music/guitar/kpa/parallel-path', '/posts/music/guitar/kpa/parallel-path', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/peals-profiler': RouteRecordInfo<'/posts/music/guitar/kpa/peals-profiler', '/posts/music/guitar/kpa/peals-profiler', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/perimeter-controls': RouteRecordInfo<'/posts/music/guitar/kpa/perimeter-controls', '/posts/music/guitar/kpa/perimeter-controls', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/pure-cabinet': RouteRecordInfo<'/posts/music/guitar/kpa/pure-cabinet', '/posts/music/guitar/kpa/pure-cabinet', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/reamping': RouteRecordInfo<'/posts/music/guitar/kpa/reamping', '/posts/music/guitar/kpa/reamping', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/rig-manager': RouteRecordInfo<'/posts/music/guitar/kpa/rig-manager', '/posts/music/guitar/kpa/rig-manager', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/stack-amplifier': RouteRecordInfo<'/posts/music/guitar/kpa/stack-amplifier', '/posts/music/guitar/kpa/stack-amplifier', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/stack-eq': RouteRecordInfo<'/posts/music/guitar/kpa/stack-eq', '/posts/music/guitar/kpa/stack-eq', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/switches': RouteRecordInfo<'/posts/music/guitar/kpa/switches', '/posts/music/guitar/kpa/switches', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/kpa/volume-boost-pedal': RouteRecordInfo<'/posts/music/guitar/kpa/volume-boost-pedal', '/posts/music/guitar/kpa/volume-boost-pedal', Record<never, never>, Record<never, never>>,
    '/posts/music/guitar/train/basic': RouteRecordInfo<'/posts/music/guitar/train/basic', '/posts/music/guitar/train/basic', Record<never, never>, Record<never, never>>,
    '/posts/music/ncm/悶々ふぁんもおらん': RouteRecordInfo<'/posts/music/ncm/悶々ふぁんもおらん', '/posts/music/ncm/悶々ふぁんもおらん', Record<never, never>, Record<never, never>>,
    '/posts/music/ncm/おくすり飲んで寝よう': RouteRecordInfo<'/posts/music/ncm/おくすり飲んで寝よう', '/posts/music/ncm/おくすり飲んで寝よう', Record<never, never>, Record<never, never>>,
    '/posts/music/ncm/サヨナラ深夜ちゃん': RouteRecordInfo<'/posts/music/ncm/サヨナラ深夜ちゃん', '/posts/music/ncm/サヨナラ深夜ちゃん', Record<never, never>, Record<never, never>>,
    '/posts/music/theory/_1-basic': RouteRecordInfo<'/posts/music/theory/_1-basic', '/posts/music/theory/_1-basic', Record<never, never>, Record<never, never>>,
    '/posts/music/theory/_2-temperament': RouteRecordInfo<'/posts/music/theory/_2-temperament', '/posts/music/theory/_2-temperament', Record<never, never>, Record<never, never>>,
    '/posts/music/theory/_3-mode': RouteRecordInfo<'/posts/music/theory/_3-mode', '/posts/music/theory/_3-mode', Record<never, never>, Record<never, never>>,
    '/posts/music/theory/_4-spectrum': RouteRecordInfo<'/posts/music/theory/_4-spectrum', '/posts/music/theory/_4-spectrum', Record<never, never>, Record<never, never>>,
    '/posts/music/theory/_5-fingerboard': RouteRecordInfo<'/posts/music/theory/_5-fingerboard', '/posts/music/theory/_5-fingerboard', Record<never, never>, Record<never, never>>,
    '/posts/notes/blockchain/bitcoin/': RouteRecordInfo<'/posts/notes/blockchain/bitcoin/', '/posts/notes/blockchain/bitcoin', Record<never, never>, Record<never, never>>,
    '/posts/notes/blockchain/bitcoin/bitcoinjs': RouteRecordInfo<'/posts/notes/blockchain/bitcoin/bitcoinjs', '/posts/notes/blockchain/bitcoin/bitcoinjs', Record<never, never>, Record<never, never>>,
    '/posts/notes/blockchain/bitcoin/wallet': RouteRecordInfo<'/posts/notes/blockchain/bitcoin/wallet', '/posts/notes/blockchain/bitcoin/wallet', Record<never, never>, Record<never, never>>,
    '/posts/notes/blockchain/solidity/': RouteRecordInfo<'/posts/notes/blockchain/solidity/', '/posts/notes/blockchain/solidity', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/angularjs/': RouteRecordInfo<'/posts/notes/client/angularjs/', '/posts/notes/client/angularjs', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/angularjs/baisc': RouteRecordInfo<'/posts/notes/client/angularjs/baisc', '/posts/notes/client/angularjs/baisc', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/angularjs/command': RouteRecordInfo<'/posts/notes/client/angularjs/command', '/posts/notes/client/angularjs/command', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/angularjs/controller': RouteRecordInfo<'/posts/notes/client/angularjs/controller', '/posts/notes/client/angularjs/controller', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/css/basic': RouteRecordInfo<'/posts/notes/client/css/basic', '/posts/notes/client/css/basic', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/css/css3': RouteRecordInfo<'/posts/notes/client/css/css3', '/posts/notes/client/css/css3', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/css/flex': RouteRecordInfo<'/posts/notes/client/css/flex', '/posts/notes/client/css/flex', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/css/grid': RouteRecordInfo<'/posts/notes/client/css/grid', '/posts/notes/client/css/grid', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/css/layout': RouteRecordInfo<'/posts/notes/client/css/layout', '/posts/notes/client/css/layout', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/css/less': RouteRecordInfo<'/posts/notes/client/css/less', '/posts/notes/client/css/less', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/css/render': RouteRecordInfo<'/posts/notes/client/css/render', '/posts/notes/client/css/render', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/ecmascript/': RouteRecordInfo<'/posts/notes/client/ecmascript/', '/posts/notes/client/ecmascript', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/ecmascript/ECMAScript-6': RouteRecordInfo<'/posts/notes/client/ecmascript/ECMAScript-6', '/posts/notes/client/ecmascript/ECMAScript-6', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/ecmascript/ECMAScript-7': RouteRecordInfo<'/posts/notes/client/ecmascript/ECMAScript-7', '/posts/notes/client/ecmascript/ECMAScript-7', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/ecmascript/ECMAScript-8-11': RouteRecordInfo<'/posts/notes/client/ecmascript/ECMAScript-8-11', '/posts/notes/client/ecmascript/ECMAScript-8-11', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/electron/': RouteRecordInfo<'/posts/notes/client/electron/', '/posts/notes/client/electron', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/electron/app': RouteRecordInfo<'/posts/notes/client/electron/app', '/posts/notes/client/electron/app', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/electron/browser': RouteRecordInfo<'/posts/notes/client/electron/browser', '/posts/notes/client/electron/browser', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/electron/clipboard': RouteRecordInfo<'/posts/notes/client/electron/clipboard', '/posts/notes/client/electron/clipboard', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/electron/command': RouteRecordInfo<'/posts/notes/client/electron/command', '/posts/notes/client/electron/command', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/electron/dialog': RouteRecordInfo<'/posts/notes/client/electron/dialog', '/posts/notes/client/electron/dialog', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/electron/menu': RouteRecordInfo<'/posts/notes/client/electron/menu', '/posts/notes/client/electron/menu', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/electron/native-image': RouteRecordInfo<'/posts/notes/client/electron/native-image', '/posts/notes/client/electron/native-image', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/electron/renderer': RouteRecordInfo<'/posts/notes/client/electron/renderer', '/posts/notes/client/electron/renderer', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/electron/tray': RouteRecordInfo<'/posts/notes/client/electron/tray', '/posts/notes/client/electron/tray', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/eslint/': RouteRecordInfo<'/posts/notes/client/eslint/', '/posts/notes/client/eslint', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/eslint/common': RouteRecordInfo<'/posts/notes/client/eslint/common', '/posts/notes/client/eslint/common', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/gsap/': RouteRecordInfo<'/posts/notes/client/gsap/', '/posts/notes/client/gsap', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/gsap/context': RouteRecordInfo<'/posts/notes/client/gsap/context', '/posts/notes/client/gsap/context', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/gsap/plugin-css': RouteRecordInfo<'/posts/notes/client/gsap/plugin-css', '/posts/notes/client/gsap/plugin-css', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/html/basic': RouteRecordInfo<'/posts/notes/client/html/basic', '/posts/notes/client/html/basic', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/html/html5': RouteRecordInfo<'/posts/notes/client/html/html5', '/posts/notes/client/html/html5', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/javascript/baisc': RouteRecordInfo<'/posts/notes/client/javascript/baisc', '/posts/notes/client/javascript/baisc', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/javascript/bom': RouteRecordInfo<'/posts/notes/client/javascript/bom', '/posts/notes/client/javascript/bom', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/javascript/canvas': RouteRecordInfo<'/posts/notes/client/javascript/canvas', '/posts/notes/client/javascript/canvas', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/javascript/canvas-animation': RouteRecordInfo<'/posts/notes/client/javascript/canvas-animation', '/posts/notes/client/javascript/canvas-animation', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/javascript/concept': RouteRecordInfo<'/posts/notes/client/javascript/concept', '/posts/notes/client/javascript/concept', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/javascript/design': RouteRecordInfo<'/posts/notes/client/javascript/design', '/posts/notes/client/javascript/design', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/javascript/dom': RouteRecordInfo<'/posts/notes/client/javascript/dom', '/posts/notes/client/javascript/dom', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/javascript/drag': RouteRecordInfo<'/posts/notes/client/javascript/drag', '/posts/notes/client/javascript/drag', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/javascript/function': RouteRecordInfo<'/posts/notes/client/javascript/function', '/posts/notes/client/javascript/function', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/javascript/html5': RouteRecordInfo<'/posts/notes/client/javascript/html5', '/posts/notes/client/javascript/html5', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/module/builds/esbuild': RouteRecordInfo<'/posts/notes/client/module/builds/esbuild', '/posts/notes/client/module/builds/esbuild', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/module/builds/grunt': RouteRecordInfo<'/posts/notes/client/module/builds/grunt', '/posts/notes/client/module/builds/grunt', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/module/builds/gulp': RouteRecordInfo<'/posts/notes/client/module/builds/gulp', '/posts/notes/client/module/builds/gulp', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/module/builds/rollup': RouteRecordInfo<'/posts/notes/client/module/builds/rollup', '/posts/notes/client/module/builds/rollup', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/module/builds/rollup-plugin': RouteRecordInfo<'/posts/notes/client/module/builds/rollup-plugin', '/posts/notes/client/module/builds/rollup-plugin', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/module/history/': RouteRecordInfo<'/posts/notes/client/module/history/', '/posts/notes/client/module/history', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/module/history/amd': RouteRecordInfo<'/posts/notes/client/module/history/amd', '/posts/notes/client/module/history/amd', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/module/history/browserify': RouteRecordInfo<'/posts/notes/client/module/history/browserify', '/posts/notes/client/module/history/browserify', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/module/history/es6': RouteRecordInfo<'/posts/notes/client/module/history/es6', '/posts/notes/client/module/history/es6', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/module/webpack/advanced/loader': RouteRecordInfo<'/posts/notes/client/module/webpack/advanced/loader', '/posts/notes/client/module/webpack/advanced/loader', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/module/webpack/advanced/mini-webpack': RouteRecordInfo<'/posts/notes/client/module/webpack/advanced/mini-webpack', '/posts/notes/client/module/webpack/advanced/mini-webpack', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/module/webpack/advanced/plugin': RouteRecordInfo<'/posts/notes/client/module/webpack/advanced/plugin', '/posts/notes/client/module/webpack/advanced/plugin', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/module/webpack/basic': RouteRecordInfo<'/posts/notes/client/module/webpack/basic', '/posts/notes/client/module/webpack/basic', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/module/webpack/detail': RouteRecordInfo<'/posts/notes/client/module/webpack/detail', '/posts/notes/client/module/webpack/detail', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/module/webpack/dev': RouteRecordInfo<'/posts/notes/client/module/webpack/dev', '/posts/notes/client/module/webpack/dev', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/module/webpack/prod': RouteRecordInfo<'/posts/notes/client/module/webpack/prod', '/posts/notes/client/module/webpack/prod', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/multi-terminal/mini-program/': RouteRecordInfo<'/posts/notes/client/multi-terminal/mini-program/', '/posts/notes/client/multi-terminal/mini-program', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/multi-terminal/mini-program/basic': RouteRecordInfo<'/posts/notes/client/multi-terminal/mini-program/basic', '/posts/notes/client/multi-terminal/mini-program/basic', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/multi-terminal/mini-program/component': RouteRecordInfo<'/posts/notes/client/multi-terminal/mini-program/component', '/posts/notes/client/multi-terminal/mini-program/component', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/multi-terminal/mpvue/': RouteRecordInfo<'/posts/notes/client/multi-terminal/mpvue/', '/posts/notes/client/multi-terminal/mpvue', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/multi-terminal/official-account/': RouteRecordInfo<'/posts/notes/client/multi-terminal/official-account/', '/posts/notes/client/multi-terminal/official-account', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/multi-terminal/official-account/interface': RouteRecordInfo<'/posts/notes/client/multi-terminal/official-account/interface', '/posts/notes/client/multi-terminal/official-account/interface', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/multi-terminal/official-account/js-sdk': RouteRecordInfo<'/posts/notes/client/multi-terminal/official-account/js-sdk', '/posts/notes/client/multi-terminal/official-account/js-sdk', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/multi-terminal/official-account/puppeteer': RouteRecordInfo<'/posts/notes/client/multi-terminal/official-account/puppeteer', '/posts/notes/client/multi-terminal/official-account/puppeteer', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/multi-terminal/official-account/qiniu': RouteRecordInfo<'/posts/notes/client/multi-terminal/official-account/qiniu', '/posts/notes/client/multi-terminal/official-account/qiniu', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/multi-terminal/uniapp/': RouteRecordInfo<'/posts/notes/client/multi-terminal/uniapp/', '/posts/notes/client/multi-terminal/uniapp', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/multi-terminal/uniapp/uni-android-ios': RouteRecordInfo<'/posts/notes/client/multi-terminal/uniapp/uni-android-ios', '/posts/notes/client/multi-terminal/uniapp/uni-android-ios', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/options/': RouteRecordInfo<'/posts/notes/client/options/', '/posts/notes/client/options', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/other/babel-ast': RouteRecordInfo<'/posts/notes/client/other/babel-ast', '/posts/notes/client/other/babel-ast', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/other/flutter': RouteRecordInfo<'/posts/notes/client/other/flutter', '/posts/notes/client/other/flutter', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/other/socket.io': RouteRecordInfo<'/posts/notes/client/other/socket.io', '/posts/notes/client/other/socket/io', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/other/typescript-ast-error': RouteRecordInfo<'/posts/notes/client/other/typescript-ast-error', '/posts/notes/client/other/typescript-ast-error', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/other/vscode-plugin': RouteRecordInfo<'/posts/notes/client/other/vscode-plugin', '/posts/notes/client/other/vscode-plugin', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/promise/': RouteRecordInfo<'/posts/notes/client/promise/', '/posts/notes/client/promise', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/promise/implement': RouteRecordInfo<'/posts/notes/client/promise/implement', '/posts/notes/client/promise/implement', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/react/': RouteRecordInfo<'/posts/notes/client/react/', '/posts/notes/client/react', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/react/baisc': RouteRecordInfo<'/posts/notes/client/react/baisc', '/posts/notes/client/react/baisc', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/react/component': RouteRecordInfo<'/posts/notes/client/react/component', '/posts/notes/client/react/component', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/react/hooks': RouteRecordInfo<'/posts/notes/client/react/hooks', '/posts/notes/client/react/hooks', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/react/router': RouteRecordInfo<'/posts/notes/client/react/router', '/posts/notes/client/react/router', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/request/ajax': RouteRecordInfo<'/posts/notes/client/request/ajax', '/posts/notes/client/request/ajax', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/request/axios': RouteRecordInfo<'/posts/notes/client/request/axios', '/posts/notes/client/request/axios', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/request/http': RouteRecordInfo<'/posts/notes/client/request/http', '/posts/notes/client/request/http', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/test/jest/': RouteRecordInfo<'/posts/notes/client/test/jest/', '/posts/notes/client/test/jest', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/test/jest/hooks': RouteRecordInfo<'/posts/notes/client/test/jest/hooks', '/posts/notes/client/test/jest/hooks', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/test/jest/matcher': RouteRecordInfo<'/posts/notes/client/test/jest/matcher', '/posts/notes/client/test/jest/matcher', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/test/jest/promise': RouteRecordInfo<'/posts/notes/client/test/jest/promise', '/posts/notes/client/test/jest/promise', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/typescript/': RouteRecordInfo<'/posts/notes/client/typescript/', '/posts/notes/client/typescript', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/typescript/advanced': RouteRecordInfo<'/posts/notes/client/typescript/advanced', '/posts/notes/client/typescript/advanced', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/typescript/class': RouteRecordInfo<'/posts/notes/client/typescript/class', '/posts/notes/client/typescript/class', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/typescript/decorators': RouteRecordInfo<'/posts/notes/client/typescript/decorators', '/posts/notes/client/typescript/decorators', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/typescript/generic': RouteRecordInfo<'/posts/notes/client/typescript/generic', '/posts/notes/client/typescript/generic', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/typescript/grammar': RouteRecordInfo<'/posts/notes/client/typescript/grammar', '/posts/notes/client/typescript/grammar', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/typescript/interface': RouteRecordInfo<'/posts/notes/client/typescript/interface', '/posts/notes/client/typescript/interface', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/typescript/namespace': RouteRecordInfo<'/posts/notes/client/typescript/namespace', '/posts/notes/client/typescript/namespace', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/typescript/types': RouteRecordInfo<'/posts/notes/client/typescript/types', '/posts/notes/client/typescript/types', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/utils/lodash': RouteRecordInfo<'/posts/notes/client/utils/lodash', '/posts/notes/client/utils/lodash', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/utils/npm': RouteRecordInfo<'/posts/notes/client/utils/npm', '/posts/notes/client/utils/npm', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/utils/zepto': RouteRecordInfo<'/posts/notes/client/utils/zepto', '/posts/notes/client/utils/zepto', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/vite/': RouteRecordInfo<'/posts/notes/client/vite/', '/posts/notes/client/vite', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/vue/': RouteRecordInfo<'/posts/notes/client/vue/', '/posts/notes/client/vue', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/vue/basic': RouteRecordInfo<'/posts/notes/client/vue/basic', '/posts/notes/client/vue/basic', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/vue/component': RouteRecordInfo<'/posts/notes/client/vue/component', '/posts/notes/client/vue/component', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/vue/composition-api': RouteRecordInfo<'/posts/notes/client/vue/composition-api', '/posts/notes/client/vue/composition-api', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/vue/router': RouteRecordInfo<'/posts/notes/client/vue/router', '/posts/notes/client/vue/router', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/vue/vue3': RouteRecordInfo<'/posts/notes/client/vue/vue3', '/posts/notes/client/vue/vue3', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/vue/vue3-router': RouteRecordInfo<'/posts/notes/client/vue/vue3-router', '/posts/notes/client/vue/vue3-router', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/vue/vue3-suspense': RouteRecordInfo<'/posts/notes/client/vue/vue3-suspense', '/posts/notes/client/vue/vue3-suspense', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/vue-core/': RouteRecordInfo<'/posts/notes/client/vue-core/', '/posts/notes/client/vue-core', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/vue-core/diff-virtual-dom': RouteRecordInfo<'/posts/notes/client/vue-core/diff-virtual-dom', '/posts/notes/client/vue-core/diff-virtual-dom', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/vue-core/mustache': RouteRecordInfo<'/posts/notes/client/vue-core/mustache', '/posts/notes/client/vue-core/mustache', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/web-mobile/': RouteRecordInfo<'/posts/notes/client/web-mobile/', '/posts/notes/client/web-mobile', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/web-mobile/adaptation': RouteRecordInfo<'/posts/notes/client/web-mobile/adaptation', '/posts/notes/client/web-mobile/adaptation', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/web-mobile/apply': RouteRecordInfo<'/posts/notes/client/web-mobile/apply', '/posts/notes/client/web-mobile/apply', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/web-mobile/screen': RouteRecordInfo<'/posts/notes/client/web-mobile/screen', '/posts/notes/client/web-mobile/screen', Record<never, never>, Record<never, never>>,
    '/posts/notes/client/web-mobile/scroll': RouteRecordInfo<'/posts/notes/client/web-mobile/scroll', '/posts/notes/client/web-mobile/scroll', Record<never, never>, Record<never, never>>,
    '/posts/notes/git/': RouteRecordInfo<'/posts/notes/git/', '/posts/notes/git', Record<never, never>, Record<never, never>>,
    '/posts/notes/git/advanced': RouteRecordInfo<'/posts/notes/git/advanced', '/posts/notes/git/advanced', Record<never, never>, Record<never, never>>,
    '/posts/notes/git/basic': RouteRecordInfo<'/posts/notes/git/basic', '/posts/notes/git/basic', Record<never, never>, Record<never, never>>,
    '/posts/notes/git/branch': RouteRecordInfo<'/posts/notes/git/branch', '/posts/notes/git/branch', Record<never, never>, Record<never, never>>,
    '/posts/notes/git/commands': RouteRecordInfo<'/posts/notes/git/commands', '/posts/notes/git/commands', Record<never, never>, Record<never, never>>,
    '/posts/notes/git/config': RouteRecordInfo<'/posts/notes/git/config', '/posts/notes/git/config', Record<never, never>, Record<never, never>>,
    '/posts/notes/git/eslint': RouteRecordInfo<'/posts/notes/git/eslint', '/posts/notes/git/eslint', Record<never, never>, Record<never, never>>,
    '/posts/notes/git/regret': RouteRecordInfo<'/posts/notes/git/regret', '/posts/notes/git/regret', Record<never, never>, Record<never, never>>,
    '/posts/notes/git/remote': RouteRecordInfo<'/posts/notes/git/remote', '/posts/notes/git/remote', Record<never, never>, Record<never, never>>,
    '/posts/notes/git/store': RouteRecordInfo<'/posts/notes/git/store', '/posts/notes/git/store', Record<never, never>, Record<never, never>>,
    '/posts/notes/git/tag': RouteRecordInfo<'/posts/notes/git/tag', '/posts/notes/git/tag', Record<never, never>, Record<never, never>>,
    '/posts/notes/interview/01_2023': RouteRecordInfo<'/posts/notes/interview/01_2023', '/posts/notes/interview/01_2023', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/graphql/': RouteRecordInfo<'/posts/notes/server/graphql/', '/posts/notes/server/graphql', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/graphql/apollo-client': RouteRecordInfo<'/posts/notes/server/graphql/apollo-client', '/posts/notes/server/graphql/apollo-client', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/graphql/apollo-server': RouteRecordInfo<'/posts/notes/server/graphql/apollo-server', '/posts/notes/server/graphql/apollo-server', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/mongodb/': RouteRecordInfo<'/posts/notes/server/mongodb/', '/posts/notes/server/mongodb', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/mongodb/basic': RouteRecordInfo<'/posts/notes/server/mongodb/basic', '/posts/notes/server/mongodb/basic', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/mongodb/find': RouteRecordInfo<'/posts/notes/server/mongodb/find', '/posts/notes/server/mongodb/find', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/mongodb/mongoose/': RouteRecordInfo<'/posts/notes/server/mongodb/mongoose/', '/posts/notes/server/mongodb/mongoose', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/mongodb/operator-find': RouteRecordInfo<'/posts/notes/server/mongodb/operator-find', '/posts/notes/server/mongodb/operator-find', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/mongodb/operator-update': RouteRecordInfo<'/posts/notes/server/mongodb/operator-update', '/posts/notes/server/mongodb/operator-update', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/mysql/': RouteRecordInfo<'/posts/notes/server/mysql/', '/posts/notes/server/mysql', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/mysql/apply': RouteRecordInfo<'/posts/notes/server/mysql/apply', '/posts/notes/server/mysql/apply', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/mysql/function': RouteRecordInfo<'/posts/notes/server/mysql/function', '/posts/notes/server/mysql/function', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/mysql/practise': RouteRecordInfo<'/posts/notes/server/mysql/practise', '/posts/notes/server/mysql/practise', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/nodejs/': RouteRecordInfo<'/posts/notes/server/nodejs/', '/posts/notes/server/nodejs', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/nodejs/buffer': RouteRecordInfo<'/posts/notes/server/nodejs/buffer', '/posts/notes/server/nodejs/buffer', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/nodejs/crypto': RouteRecordInfo<'/posts/notes/server/nodejs/crypto', '/posts/notes/server/nodejs/crypto', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/nodejs/express/': RouteRecordInfo<'/posts/notes/server/nodejs/express/', '/posts/notes/server/nodejs/express', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/nodejs/express/middleware': RouteRecordInfo<'/posts/notes/server/nodejs/express/middleware', '/posts/notes/server/nodejs/express/middleware', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/nodejs/express/multer': RouteRecordInfo<'/posts/notes/server/nodejs/express/multer', '/posts/notes/server/nodejs/express/multer', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/nodejs/fs': RouteRecordInfo<'/posts/notes/server/nodejs/fs', '/posts/notes/server/nodejs/fs', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/nodejs/http': RouteRecordInfo<'/posts/notes/server/nodejs/http', '/posts/notes/server/nodejs/http', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/nodejs/koa/': RouteRecordInfo<'/posts/notes/server/nodejs/koa/', '/posts/notes/server/nodejs/koa', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/nodejs/koa/middleware': RouteRecordInfo<'/posts/notes/server/nodejs/koa/middleware', '/posts/notes/server/nodejs/koa/middleware', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/nodejs/module': RouteRecordInfo<'/posts/notes/server/nodejs/module', '/posts/notes/server/nodejs/module', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/nodejs/os': RouteRecordInfo<'/posts/notes/server/nodejs/os', '/posts/notes/server/nodejs/os', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/nodejs/path': RouteRecordInfo<'/posts/notes/server/nodejs/path', '/posts/notes/server/nodejs/path', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/php/': RouteRecordInfo<'/posts/notes/server/php/', '/posts/notes/server/php', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/php/apply': RouteRecordInfo<'/posts/notes/server/php/apply', '/posts/notes/server/php/apply', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/php/error-code': RouteRecordInfo<'/posts/notes/server/php/error-code', '/posts/notes/server/php/error-code', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/php/function': RouteRecordInfo<'/posts/notes/server/php/function', '/posts/notes/server/php/function', Record<never, never>, Record<never, never>>,
    '/posts/notes/server/python/': RouteRecordInfo<'/posts/notes/server/python/', '/posts/notes/server/python', Record<never, never>, Record<never, never>>,
    '/posts/standard/css': RouteRecordInfo<'/posts/standard/css', '/posts/standard/css', Record<never, never>, Record<never, never>>,
    '/posts/standard/javascript': RouteRecordInfo<'/posts/standard/javascript', '/posts/standard/javascript', Record<never, never>, Record<never, never>>,
    '/posts/standard/topic-vue': RouteRecordInfo<'/posts/standard/topic-vue', '/posts/standard/topic-vue', Record<never, never>, Record<never, never>>,
    '/posts/standard/typescript': RouteRecordInfo<'/posts/standard/typescript', '/posts/standard/typescript', Record<never, never>, Record<never, never>>,
    '/posts/theme/': RouteRecordInfo<'/posts/theme/', '/posts/theme', Record<never, never>, Record<never, never>>,
    '/posts/theme/step-1': RouteRecordInfo<'/posts/theme/step-1', '/posts/theme/step-1', Record<never, never>, Record<never, never>>,
    '/posts/theme/step-2': RouteRecordInfo<'/posts/theme/step-2', '/posts/theme/step-2', Record<never, never>, Record<never, never>>,
    '/posts/theme/step-3': RouteRecordInfo<'/posts/theme/step-3', '/posts/theme/step-3', Record<never, never>, Record<never, never>>,
    '/posts/think/2022': RouteRecordInfo<'/posts/think/2022', '/posts/think/2022', Record<never, never>, Record<never, never>>,
    '/posts/think/2024': RouteRecordInfo<'/posts/think/2024', '/posts/think/2024', Record<never, never>, Record<never, never>>,
    '/posts/think/rules': RouteRecordInfo<'/posts/think/rules', '/posts/think/rules', Record<never, never>, Record<never, never>>,
    '/posts/think/sleep': RouteRecordInfo<'/posts/think/sleep', '/posts/think/sleep', Record<never, never>, Record<never, never>>,
    '/tags/': RouteRecordInfo<'/tags/', '/tags', Record<never, never>, Record<never, never>>,
    '/tags/[tag]/': RouteRecordInfo<'/tags/[tag]/', '/tags/:tag', { tag: ParamValue<true> }, { tag: ParamValue<false> }>,
  }
}
