module.exports = {
  log: {
    appenders: {
      out: {
        type: 'console',
        layout: {
          type: 'pattern',
          pattern: '%[[%p] [%d{yyyy-MM-dd hh:mm:ss}]%] %m'
        }
      }
    },
    categories: {
      default: { appenders: ['out'], level: 'debug' }
    }
  }
}
