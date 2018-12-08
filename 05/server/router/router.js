const KoaRouter = require('koa-router');

const router = KoaRouter();

router.get('/router', async ctx => {
    console.log('我已经被请求');
    ctx.body = '99999';
});

module.exports = router;
