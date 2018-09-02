module.exports = {
  log: {
    appenders: {
      out: {
        type: 'console',
        layout: {
          type: 'pattern',
          pattern: '%[[%d] [%p] (%z) -%] %m'
        }
      }
    },
    categories: {
      default: { appenders: ['out'], level: 'debug' }
    }
  }
}
