const httpProxy = require('koa-proxies')

const proxyTable = {
  '/exchange': {
    target: 'https://www.binance.com/',
  },
}

const setProxies = server => {
  Object.keys(proxyTable).forEach(context => {
    const cfg = {
      changeOrigin: true,
      logs: true,
      ...proxyTable[context],
    }

    server.use(httpProxy(context, cfg))
  })
}

export default server => {
  setProxies(server)
  return (_, next) => next()
}
