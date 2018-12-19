const { db } = require('../schema/config');
const userSchema = require('../schema/user');
const crypto = require('../until/crypto');
const createToken = require('../token/create-token');

const User = db.model('users', userSchema);

exports.res = async ctx => {
    let data = ctx.request.body;
    let username = data.username;
    let password = crypto(data.password);
    let token = createToken(username);
    await new Promise((resolve, reject) => {
        User.find({ username }, (errors, data) => {
            if (errors) return reject(errors);
            if (data.length !== 0) return resolve(data);
            const _user = new User({
                username,
                password,
                token
            });
            _user.save((errors, data) => {
                if (errors) {
                    reject(errors);
                } else {
                    resolve(data);
                }
            });
        });
    }).then(async data => {
        if (data) { // 注册成功
            ctx.body = {
                resSuccess: true
            };
        } else { // 用户名已存在
            ctx.body = JSON.stringify({
                userExisted: true
            });
        }
    }).catch(errors => {
        if (errors) {
            ctx.body = { // 注册失败
                resFailed: false
            };
        }
    });
};

exports.login = async ctx => {
    let data = ctx.request.body;
    let username = data.username;
    let password = crypto(data.password);
    let token = createToken(username);
    await new Promise((resolve, reject) => {
        User.find({ username }, (errors, data) => {
            if (errors) return reject(errors);
            if (data.length === 0) return resolve('1');
            if (data[0].password === password) {
                data[0].token = token;
                data[0].save((errors, data) => {
                    if (errors) reject(errors);
                });
                return resolve(data);
            };
            resolve('3');
        });
    }).then(data => {
        if (data === '1') {
            ctx.body = { // 用户名不存在
                userExisted: true
            };
        } else if (data === '3') { // 密码错误
            ctx.body = {
                wrongPassword: true
            };
        } else if (data.length >= 1) { // 登录成功
            ctx.body = {
                loginSuccess: true,
                token: data[0].token
            };
            /* ctx.cookies.set('username', username, {
                domain: 'localhost',
                path: '/',
                maxAge: 36e5,
                httpOnly: true,
                overwrite: false
            });
            ctx.cookies.set('uid', data[0]._id, {
                domain: 'localhost',
                path: '/',
                maxAge: 36e5,
                httpOnly: true,
                overwrite: false
            });
            ctx.session = {
                username,
                uid: data[0]._id
            }; */
        }
    }).catch(errors => {
        console.log(errors);
    });
};

// 更新一下cookie数据
exports.keepLog = async(ctx, next) => {
    if (ctx.session.isNew) {
        if (ctx.cookies.get('username')) {
            ctx.seesion = {
                username: ctx.session.get('username'),
                uid: ctx.session.get('uid')
            };
        }
    }
    await next();
};

exports.init = async ctx => {
     if (!ctx.session.isNew) {
         ctx.body = {
            loginExisted: true
        };
    } else {
        ctx.body = {
            loginExisted: false
        };
    };
};

exports.logout = async ctx => {
    ctx.session = null;
    ctx.cookies.set('username', null, {
        maxAge: 0
    });
    ctx.cookies.set('uid', null, {
        maxAge: 0
    });
    ctx.body = {
        loginExisted: true
    };
};
