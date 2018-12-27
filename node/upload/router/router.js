const Router = require('koa-router');

const router = new Router();

router.post('/send', async ctx => {
    const file = ctx.request;	// 获取上传文件
    console.log(file);
    ctx.body = "404";	// upload/xxx.xx
});

module.exports = router;