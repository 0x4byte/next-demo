let configs = require('./default')

if (process.env.ENV) {
  const env = require(`./${process.env.ENV}`)
  configs = { ...configs, ...env }
}

Object.keys(configs).forEach(key => {
  if (!process.env.hasOwnProperty(key)) {
    process.env[key] = configs[key]
  }
})
