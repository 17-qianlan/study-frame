const Koa = require('koa');
const koaCross = require('@koa/cors');

const app = new Koa();

app.use(koaCross());

const router = require('./server/router/router.js');
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
