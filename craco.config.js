const { resolve } = require('path')

function pathResolve(dir) {
  return resolve(__dirname, dir)
}

module.exports = {
  webpack: {
    alias: {
      'bn.js': pathResolve('node_modules/bn.js/lib/bn.js'),
      '~': pathResolve(''),
      '@': pathResolve('src'),
      '@gl': pathResolve('src/webGl'),
      '@img': pathResolve('src/assets/imagesTheme'),
    },
  },
}
