const paths = require('../paths')

module.exports = {
  extensions: ['.js', '.mjs', '.json', '.jsx', '.css'],
  modules: paths.resolveModules,
  alias: {
    'app/ui-kit': `${paths.src}/components/AppUIKit`,
    'app/analytics': `${paths.src}/Analytics`,
    'app': `${paths.src}`
  }
}
