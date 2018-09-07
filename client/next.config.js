const withImages = require('next-images')
const { injectBabelPlugin } = require('../utils')

const compose = (...funcs) => {
  if (funcs.length === 0) {
    return config => config
  }

  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => config => a(b(config)))
}

const withPlugins = compose(withImages)

const configs = {
  useFileSystemPublicRoutes: false,
  assetPrefix: '',

  webpack: webpackCfg => {
    injectBabelPlugin(
      [
        'styled-components',
        {
          ssr: true,
          displayName: true
        }
      ],
      webpackCfg
    )
    return webpackCfg
  }
}

module.exports = withPlugins(configs)
