module.exports = (env = 'production') => {
  if (env === 'development' || env === 'dev') {
    process.env.NODE_ENV = 'development'
    return [require('./client.dev')]
  }
  process.env.NODE_ENV = 'production'
  return [require('./client.prod')]
}
