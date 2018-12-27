const Router = require('koa-router');
const user = require('../control/user');

const router = new Router();
router.get('/55', async ctx => {
    ctx.body = '1111';
});

router.post('/user/res', user.res);

module.exports = router;
