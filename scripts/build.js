const webpack = require('webpack')
const rimraf = require('rimraf')
const paths = require('../config/paths')
const webpackConfig = require('../config/webpack.config.js')(process.env.NODE_ENV || 'development')

const build = async () => {
  rimraf.sync(paths.clientBuild)

  webpack(webpackConfig, (error, stats) => {
    console.log('webpack', error, stats)
  })
}

build()
