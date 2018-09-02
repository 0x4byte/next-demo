import Koa from 'koa'
import koaBody from 'koa-body'
import nextApp from '../client/next'
import logger from './middlewares/logger'
import proxy from './middlewares/proxy'
import router from './routes'

const port = 3010
const env = process.env.NODE_ENV

const app = nextApp

app
  .prepare()
  .then(() => {
    const server = new Koa()

    // logger
    server.use(logger())

    // body parser
    server.use(koaBody())

    // proxy
    server.use(proxy(server))

    // pages router
    server.use(router.routes())
    server.use(router.allowedMethods())

    server.listen(port, err => {
      if (err) throw err

      console.log(`> Ready on port ${port} [${env}]`)
    })
  })
  .catch(err => {
    throw err
  })
