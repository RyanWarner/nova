const paths = require('../paths')
const { client: clientLoaders } = require('./loaders')
const resolvers = require('./resolvers')
const plugins = require('./plugins')
const TerserPlugin = require('terser-webpack-plugin')

const publicPath = process.env.NODE_ENV === 'production' ? `${paths.cdn}/` : paths.publicPath

module.exports = {
  name: 'client',
  target: 'web',
  entry: {
    bundle: [`${paths.src}/index.js`]
  },
  output: {
    path: paths.clientBuild,
    filename: 'bundle.js',
    publicPath,
    chunkFilename: '[name].[chunkhash:8].chunk.js'
  },
  module: {
    rules: clientLoaders
  },
  resolve: { ...resolvers },
  plugins: [...plugins.shared, ...plugins.client],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  optimization: {
    namedModules: true,
    noEmitOnErrors: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  stats: {
    cached: false,
    cachedAssets: false,
    chunks: false,
    chunkModules: false,
    colors: true,
    hash: false,
    modules: false,
    reasons: false,
    timings: true,
    version: false
  }
}
