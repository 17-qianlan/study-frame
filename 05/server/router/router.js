const KoaRouter = require('koa-router');

const router = new KoaRouter();
const user = require('../control/user');

router.get('/router', async ctx => {
    console.log('我已经被请求');
    ctx.body = '99999';
});

router.get('/user/init', user.keepLog, user.init);
router.post('/user/res', user.res);
router.post('/user/login', user.login);
router.post('/user/logout', user.keepLog, user.login);

module.exports = router;
