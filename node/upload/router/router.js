const Router = require('koa-router');
const fs = require('fs');

const router = new Router();

router.post('/send', async ctx => {
    const file = ctx.request.body.file;	// 获取上传文件
    const filename = file.split('.');
    const ext = filename[1];
    const name = filename[0].split("\\")[2];
    const reader = fs.createReadStream(file);
    console.log(reader);
    const upStream = fs.createWriteStream(`file/${name}1.${ext}`);
    reader.pipe(upStream);
    ctx.body = "404";	// upload/xxx.xx
});

module.exports = router;