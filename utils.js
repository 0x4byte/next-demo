const getLoader = function(rules, matcher) {
  let loader

  rules.some(rule => {
    if (matcher(rule)) {
      loader = rule
    } else {
      const _rules = [rule.use]
      loader = getLoader(_rules, matcher)
    }

    return loader
  })

  return loader
}

const getBabelLoader = function(rules) {
  let loader
  rules.some(rule => {
    if (rule.use.loader === 'next-babel-loader') {
      loader = rule
      return true
    }
    return false
  })
  return loader
}

const injectBabelPlugin = function(pluginName, config) {
  const loader = getBabelLoader(config.module.rules)
  if (!loader) {
    console.log('next-babel-loader not found')
    return config
  }
  // Older versions of webpack have `plugins` on `loader.query` instead of `loader.options`.
  const options = loader.use.options || loader.query
  options.plugins = [pluginName].concat(options.plugins || [])

  return config
}

const compose = function(...funcs) {
  if (funcs.length === 0) {
    return config => config
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (config, env) => a(b(config, env), env))
}

module.exports = {
  getBabelLoader,
  injectBabelPlugin,
  compose
}
