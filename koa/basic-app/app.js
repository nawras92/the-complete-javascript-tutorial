const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello Everyone 1';
});

app.listen(5000);
