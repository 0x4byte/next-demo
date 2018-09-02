import Router from 'koa-router'
import nextApp from '../client/next'

const router = new Router()
const handle = nextApp.getRequestHandler()

const renderHtml = async (ctx, pageName) => {
  return nextApp.renderToHTML(ctx.req, ctx.res, pageName, {
    ...ctx.params,
    ...ctx.query,
  })
}

// page request.
router.get('/', async ctx => {
  ctx.body = await renderHtml(ctx, '/home')
})
router.get('/home', async ctx => {
  ctx.body = await renderHtml(ctx, '/home')
})
router.get('/about', async ctx => {
  ctx.body = await renderHtml(ctx, '/about')
})

// other request.
router.get('*', async ctx => {
  return handle(ctx.req, ctx.res)
})

export default router
