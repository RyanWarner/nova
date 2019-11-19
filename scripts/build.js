const webpack = require('webpack')
const rimraf = require('rimraf')
const paths = require('../config/paths')
const webpackConfig = require('../config/webpack.config.js')(process.env.NODE_ENV || 'development')

const build = async () => {
  rimraf.sync(paths.clientBuild)

  webpack(webpackConfig, (error, stats) => {
    console.log('webpack', error, stats)

    const info = stats.toJson()
    if (stats.hasErrors()) {
      console.error(info.errors[0])
      process.exit(1)
    }
  })
}

build()
