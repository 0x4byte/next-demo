module.exports = {
  log: {
    appenders: {
      file: {
        type: 'dateFile',
        layout: {
          type: 'pattern',
          pattern: '[%p] [%d{yyyy-MM-dd hh:mm:ss}] %m'
        },
        filename: 'server.log',
        keepFileExt: true
      }
    },
    categories: {
      default: { appenders: ['file'], level: 'info' }
    }
  }
}
