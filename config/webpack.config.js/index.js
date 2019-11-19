module.exports = (env = 'production') => {
  const paths = require('../paths')

  if (env === 'development' || env === 'dev') {
    process.env.NODE_ENV = 'development'
    require('dotenv').config({ path: `${paths.dotenv}.${process.env.DEPLOY_ENV || 'local'}` })
    return [require('./client.dev')]
  }
  process.env.NODE_ENV = 'production'
  return [require('./client.prod')]
}
