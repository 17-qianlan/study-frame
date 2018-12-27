// 这个token在任意需要验证的里边调用,以检测请求头里是否包含token,如果包含token, 用户下次向我们的应用请求受保护的资源的时候，可以在请求里带着我们给它签发的这个 Token，
// 后端应用收到请求，检查签名，如果验证通过确定这个 Token 是我们自己签发的，那就可以为用户响应回他需要的资源。

const jwt = require('jsonwebtoken');

module.exports = async(ctx, next) => {
    let authorization = ctx.get('authorization');
    if (authorization === '') {
        ctx.body = {
            isToken: false
        };
    };
    let token = authorization.split('')[1];
    let tokenContent;
    try {
        tokenContent = await jwt.verify(token, 'sinner77');
    } catch (err) {
        ctx.status = 401;
        ctx.body = {
            saveTokenSuccess: false
        };
    }
    if (tokenContent) {
        await next();
    } else {
        ctx.body = {
            verification: false
        };
    }
};
