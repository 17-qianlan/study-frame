const Router = require('koa-router');

const router = new Router();
router.get('/55', async ctx => {
    ctx.body = '1111';
});
module.exports = router;
