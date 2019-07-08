const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const got = require('got')

const db = require('./db')

const app = new Koa()
const router = new Router()

router.get('/schema', ctx => {
  ctx.body = { result: db.getAll() }
})

router.get('/schema/:id', ctx => {
  ctx.body = { result: db.getById(ctx.params.id) }
})

router.post('/schema', ctx => {
  const { name, url, schema } = ctx.request.body
  const ret = db.add(name, url, schema)
  ctx.body = { result: ret }
})

router.delete('/schema/:id', ctx => {
  const ret = db.removeById(ctx.params.id)
  ctx.body = { result: ret }
})

router.post('/submit/:id', async ctx => {
  const { url } = db.getById(ctx.params.id)
  const resp = await got.post(url, {
    body: JSON.stringify(ctx.request.body.result),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
  ctx.body = { result: resp.body }
})

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

const port = process.env.PORT || 9000
app.listen(Number(port), () => {
  console.log('App is running at port', port)
})
