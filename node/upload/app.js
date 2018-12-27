const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('@koa/cors');

const router = require('./router/router');

const app = new Koa();
app.use(cors());
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 10 * Math.pow(1024, 2)
    }
}));
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('正在监听3000端口');
});
