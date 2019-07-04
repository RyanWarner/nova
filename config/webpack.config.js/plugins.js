const webpack = require('webpack')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const paths = require('../paths')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const deployEnv = process.env.DEPLOY_ENV || 'development'

const shared = []

const client = [
  new CaseSensitivePathsPlugin(),
  new HtmlWebpackPlugin({
    template: `${paths.src}/index.ejs`,
    filename: 'index.html'
  }),
  new Dotenv({
    path: `${paths.dotenv}.${deployEnv}`
  }),
  new webpack.DefinePlugin({
    __SERVER__: 'false',
    __BROWSER__: 'true'
  }),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
]

module.exports = {
  shared,
  client
}
