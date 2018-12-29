# koa+axios文件上传

### 要点

#### 前端

- 使用`axios`发送数据，必须使用异步发送
- 数据使用`new FormData（'xxx', val）`；

#### 后台

- 接收使用`ctx.body.files.xxx`

- 需要使用fs的读取流和写入流，两个都是异步函数

```javascript
const reader = fs.createReadStream(file.path);
const upStream = fs.createWriteStream(`file/${name}1.${ext}`);
/////////////////////////////////////////////////////////
fs.createReadStream('读取路径');
fs.createWriteStream('写入路径');
```



- koa-body

  ```javascript
  app.use(koabody({
      multipart: true,
      formidable: {
          maxFileSize: 2000*1024*1024    
          // 设置上传文件大小最大限制，默认2M  单位kb , 超过限制报错
      }
  }))
  ```
