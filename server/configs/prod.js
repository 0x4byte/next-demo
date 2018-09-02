module.exports = {
  log: {
    appenders: {
      file: {
        type: 'dateFile',
        layout: {
          type: 'pattern',
          pattern: '[%d] [%p] (%z) - %m'
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
