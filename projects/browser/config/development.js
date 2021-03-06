const merge = require('webpack-merge')

const parts = require('./parts')
const PATHS = require('../PATHS')

module.exports = merge([
  {
    output: {
      chunkFilename: '[name].js',
      filename: '[name].js',
      path: `${PATHS.build}/development`
    }
  },

  parts.cleanPaths(['build/development']),

  parts.setupDevServer({
    host: process.env.HOST,
    port: process.env.PORT,
    historyApiFallback: true,
    hot: true
  }),

  parts.loadStyles(),

  parts.loadImgs(),

  parts.loadFonts(),

  parts.genSourceMaps({ type: 'cheap-module-eval-source-map' })
])
