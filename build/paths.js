var appRoot = 'src/';
var outputRoot = 'dist/';
var exporSrvtRoot = 'export/';
var styles = 'styles';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.ts',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  style: 'styles/**/*.css',
  output: outputRoot,
  cssDist: outputRoot + styles,
  exportSrv: exporSrvtRoot,
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/**/*.ts',
  e2eSpecsDist: 'test/e2e/dist/',
  dtsSrc: [
    './typings/**/*.d.ts',
    './custom_typings/**/*.d.ts'
  ]
}
