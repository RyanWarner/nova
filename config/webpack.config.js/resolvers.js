const paths = require('../paths')

module.exports = {
  extensions: ['.js', '.mjs', '.json', '.jsx', '.css'],
  modules: paths.resolveModules,
  alias: {
    'app/ui-kit': `${paths.src}/components/AppUIKit`,
    app: `${paths.src}`
  }
}
