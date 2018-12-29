const fs = require('fs');
const Koa = require('koa');
const app = new Koa();


const reader = fs.createReadStream('file/111.md');
console.log(reader);

app.listen(3001);