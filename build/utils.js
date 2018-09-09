const path = require('path')

const loaderNameMatches = function(rule, loader_name) {
  const loader = rule && (rule.loader || rule.use)

  return (
    loader &&
    typeof loader === 'string' &&
    (loader === loader_name ||
      loader.indexOf(`${path.sep}${loader_name}${path.sep}`) !== -1 ||
      loader.indexOf(`@${loader_name}${path.sep}`) !== -1)
  )
}

const babelLoaderMatcher = function(rule) {
  return loaderNameMatches(rule, 'next-babel-loader')
}

const getLoader = function(rules, matcher) {
  let loader

  rules.some(rule => {
    // loader, use: string
    let isMatch = matcher(rule)
    if (isMatch) {
      loader = rule
      return loader
    }

    // loaders, use, oneOf: array
    const loaders =
      (Array.isArray(rule.use) && rule.use) ||
      (Array.isArray(rule.loaders) && rule.loaders) ||
      (Array.isArray(rule.oneOf) && rule.oneOf)
    if (loaders) {
      loader = getLoader(loaders)
      return loader
    }

    // use: object
    if (rule.use && rule.use.loader && matcher(rule.use)) {
      loader = rule.use
      return loader
    }

    return loader
  })

  return loader
}

const getBabelLoader = function(rules) {
  return getLoader(rules, babelLoaderMatcher)
}

const injectBabelPlugin = function(pluginName, config) {
  const loader = getBabelLoader(config.module.rules)
  if (!loader) {
    console.log('babel-loader not found')
    return config
  }
  // Older versions of webpack have `plugins` on `loader.query` instead of `loader.options`.
  const options = loader.options || loader.query
  options.plugins = [pluginName].concat(options.plugins || [])
  return config
}

const compose = (...funcs) => {
  if (funcs.length === 0) {
    return config => config
  }

  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => config => a(b(config)))
}

const withOptions = (plugin, options = {}) => config =>
  plugin({ ...config, ...options })

module.exports = {
  injectBabelPlugin,
  compose,
  withOptions,
}
