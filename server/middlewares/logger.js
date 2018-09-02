// server logger
import log4js from 'log4js'
import config from '../configs/'

log4js.configure(config.log)

const logger = log4js.getLogger()
console.log = logger.info.bind(logger)
console.debug = logger.debug.bind(logger)
console.info = logger.info.bind(logger)
console.warn = logger.warn.bind(logger)
console.error = logger.error.bind(logger)

const ignoreUrls = [
  '.js$',
  '.js.map$',
  '.hot-update.json$',
  '.(png|jpg|gif)$',
  '/_next/*'
]

// ignore url.
const shouldIgnore = url => {
  const len = ignoreUrls.length
  for (let i = 0; i < len; i++) {
    const reg = new RegExp(ignoreUrls[i])
    if (reg.test(url)) {
      return true
    }
  }
  return false
}

const logWrap = () => {
  // output request log
  return async (ctx, next) => {
    if (shouldIgnore(ctx.url)) return next()

    const startTime = new Date().getTime()

    await next()

    const url = ctx.url + ' ' + ctx.method + ' ' + ctx.status
    const log = {
      reqQuery: ctx.query,
      reqBody: ctx.request.body,
      reqHeader: ctx.request.headers,
      spendTime: new Date().getTime() - startTime + 'ms'
    }

    let format = '\n{'

    Object.keys(log).forEach(key => {
      format += '\n    ' + (key + ': ' + JSON.stringify(log[key]))
    })

    format += '\n}'

    console.info(url, format)
  }
}

export default logWrap
