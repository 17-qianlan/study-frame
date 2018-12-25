const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

const router = require('./server/router/router');

app.use(koaBody());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
