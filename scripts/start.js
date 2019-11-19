const webpack = require('webpack')
const rimraf = require('rimraf')
const paths = require('../config/paths')
const webpackConfig = require('../config/webpack.config.js')(process.env.NODE_ENV || 'development')
const WebpackDevServer = require('webpack-dev-server')

const start = async () => {
  rimraf.sync(paths.clientBuild)

  const port = process.env.PORT || 8080
  const host = 'localhost'

  webpackConfig.watch = true
  const options = {
    stats: { colors: true },
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true,
    port,
    contentBase: './public',
    host,
    open: true
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
