const Koa = require('koa');
const koaBody = require('koa-body');
const cross = require('@koa/cors');

const app = new Koa();

const router = require('./server/router/router');

app.use(cross());
app.use(koaBody());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
