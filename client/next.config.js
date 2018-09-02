const nextImages = require('next-images')

const configs = {
  useFileSystemPublicRoutes: false,
  assetPrefix: '',

  webpack: webpackCfg => {
    return webpackCfg
  }
}

module.exports = nextImages(configs)
