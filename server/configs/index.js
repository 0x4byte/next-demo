let config = {}

const env = process.env.NODE_ENV

if (env === 'development') {
  config = require('./dev')
} else {
  config = require('./prod')
}

module.exports = config
