const Koa = require('koa');
const koaCross = require('@koa/cors');
const koaBody = require('koa-body');
const session = require('koa-session');

const app = new Koa();

app.use(koaCross());
app.use(koaBody());

app.keys = ['lightBlue'];
const CONFIG = {
    key: 'lightBlue',
    maxAge: 36e5,
    overWrite: true,
    httpOnly: true,
    singed: true,
    rolling: true
};

app.use(session(CONFIG, app));

const router = require('./server/router/router.js');
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
