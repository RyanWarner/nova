const paths = require('../paths')

module.exports = {
  extensions: ['.js', '.mjs', '.json', '.jsx', '.css'],
  modules: paths.resolveModules,
  alias: {
    'app/styles': `${paths.src}/styles/index`,
    'app/ui-kit': `${paths.src}/components/AppUIKit`,
    'app/utilities': `${paths.src}/Utilities`,
    'app/analytics': `${paths.src}/Analytics`,
    'app/components': `${paths.src}/components`,
    'app/assets': `${paths.src}/assets`,
    'app/store': `${paths.src}/store`,
    'app/data': `${paths.src}/data`,
    'app/api': `${paths.src}/api`
  }
}
