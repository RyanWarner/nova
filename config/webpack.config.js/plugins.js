const webpack = require('webpack')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const paths = require('../paths')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const deployEnv = process.env.DEPLOY_ENV || 'local'

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
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/, /\.stories\./)
]

if (process.env.ANALYZER === 'true') {
  client.push(new BundleAnalyzerPlugin())
}

module.exports = {
  shared,
  client
}
