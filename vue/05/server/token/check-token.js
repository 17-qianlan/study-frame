const jwt = require('jsonwebtoken');

module.exports = async(ctx, next) => {
    let authorization = ctx.get('Authorization');
    console.log(authorization);
    if (authorization === '') {
        ctx.status = 401;
        ctx.body = {
            isToken: false
        };
    }
    let token = authorization.split('')[1];
    try {
        await jwt.verify(token, 'sinner77');
    } catch (err) {
        ctx.status = 401;
        ctx.body = {
            saveSuccess: false
        };
    }
    await next();
    // return tokenContent;
};
