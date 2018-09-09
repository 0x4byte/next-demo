require('../build/env/init')
const nextImages = require('next-images')
const transpiles = require('@weco/next-plugin-transpile-modules')
const nextLess = require('@zeit/next-less')
const { compose, withOptions } = require('../build/utils')
const nextAntdPlugin = require('../build/plugins/nextAntdPlugin')
const nextStyledPlugin = require('../build/plugins/nextStyledPlugin')

const withNextPlugins = compose(
  nextImages,
  nextAntdPlugin,
  nextStyledPlugin,
  withOptions(nextLess, {
    lessLoaderOptions: {
      modifyVars: require('../build/antd-theme'),
      javascriptEnabled: true,
    },
  }),
  withOptions(transpiles, { transpileModules: ['antd'] }),
)

const configs = {
  useFileSystemPublicRoutes: false,
  assetPrefix: '',
}

module.exports = withNextPlugins(configs)
