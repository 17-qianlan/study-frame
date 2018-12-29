const Router = require('koa-router');
const fs = require('fs');

const router = new Router();

router.post('/send', async ctx => {
    const file = ctx.request.files.file;	// 获取上传文件
    const filename = file.name.split('.');
    const name = filename[0];
    const ext = filename[1];
    const reader = fs.createReadStream(file.path);
    const upStream = fs.createWriteStream(`file/${name}1.${ext}`);
    reader.pipe(upStream);
    ctx.body = file;	// upload/xxx.xx
});

/*router.get('/', async ctx => {
    // ctx.response.type = "html";
    // ctx.body = fs.createReadStream('./views/app.html');
    await ctx.render('app');
});*/

module.exports = router;