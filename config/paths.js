const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)
const cdn = process.env.CDN || ''

const paths = {
  clientBuild: resolveApp('dist/'),
  dotenv: resolveApp('config/.env'),
  src: resolveApp('src'),
  components: resolveApp('src/components'),
  pages: resolveApp('src/pages'),
  nodeModules: resolveApp('node_modules'),
  publicPath: '/dist/',
  cdn
}

paths.resolveModules = [
  paths.src,
  paths.nodeModules
]

module.exports = paths
