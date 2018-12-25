const jwt = require('jsonwebtoken');

module.exports = async(ctx, next) => {
    let authorization = ctx.get('authorization');
    if (authorization === '') {
        ctx.body = {
            isToken: false
        };
    };
    let token = authorization.split('')[1];
    try {
        await jwt.verify(token, 'sinner77');
    } catch (err) {
        ctx.status = 401;
        ctx.body = {
            saveTokenSuccess: false
        };
    }
    await next();
};
