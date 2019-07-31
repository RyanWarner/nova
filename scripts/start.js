const webpack = require('webpack')
const rimraf = require('rimraf')
const paths = require('../config/paths')
const webpackConfig = require('../config/webpack.config.js')(process.env.NODE_ENV || 'development')
const WebpackDevServer = require('webpack-dev-server')

const start = async () => {
  rimraf.sync(paths.clientBuild)

  const port = 8080
  const host = '0.0.0.0'

  webpackConfig.watch = true
  const options = {
    stats: { colors: true },
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true,
    port,
    contentBase: './public',
    host
  }

  WebpackDevServer.addDevServerEntrypoints(webpackConfig, options)
  const server = new WebpackDevServer(webpack(webpackConfig), options)
  server.listen(port, host, (error) => {
    if (error) {
      console.log('Error', error)
    }
  })
}

start()
