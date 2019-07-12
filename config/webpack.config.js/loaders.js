const paths = require('../paths')

const babelLoader = {
  test: /\.(js|jsx|mjs)$/,
  include: paths.src,
  loader: 'babel-loader'
}

const ASSET_PATH = process.env.NODE_ENV === 'production' ? paths.cdn : paths.publicPath

const urlLoaderConfig = (emitFile) => ({
  loader: require.resolve('url-loader'),
  options: {
    limit: 1,
    name: 'assets/[name].[hash:8].[ext]',
    publicPath: ASSET_PATH,
    emitFile
  }
})

const imageLoaderConfig = {
  loader: 'image-webpack-loader',
  options: {
    disable: process.env.NODE_ENV === 'development',
    pngquant: {
      quality: '65-100',
      speed: 4
    }
  }
}

const urlLoaderClient = {
  test: /\.(png|jpe?g|gif|svg|ttf|otf|eot|woff|woff2)$/,
  use: [urlLoaderConfig(true), imageLoaderConfig]
}
const cssLoaderClient = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
}

const fileLoaderClient = {
  exclude: [/\.(js|css|ejs|html|json)$/],
  use: [{
    loader: require.resolve('file-loader'),
    options: {
      name: 'assets/[name].[hash:8].[ext]'
    }
  }]
}

const eslintLoader = {
  test: /\.(js|jsx)?$/,
  enforce: 'pre',
  include: paths.src,
  use: [
    { loader: 'babel-loader' },
    { loader: 'eslint-loader',
      options: {
        emitWarning: true
        // fix: true
      }
    }
  ]
}

const client = [{
  oneOf: [
    eslintLoader,
    babelLoader,
    urlLoaderClient,
    cssLoaderClient,
    fileLoaderClient
  ]
}]

module.exports = {
  client
}
