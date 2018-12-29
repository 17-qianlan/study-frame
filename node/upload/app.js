const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('@koa/cors');

const router = require('./router/router');

const app = new Koa();
app.use(cors());
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 2000*1024*1024    // 设置上传文件大小最大限制，默认2M
    }
}));

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('正在监听3000端口');
});
