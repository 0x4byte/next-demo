const { injectBabelPlugin } = require('../utils')

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config = injectBabelPlugin(
        ['import', { libraryName: 'antd', style: true }],
        config,
      )

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  })
}
