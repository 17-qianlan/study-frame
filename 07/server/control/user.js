const { db } = require('../schema/schema');
const userSchema = require('../schema/user');
const crypto = require('../until/crypto');
const createToken = require('../token/create-token');

const User = db.model('users', userSchema);

exports.login = async ctx => {
    let data = ctx.request.body;
    let username = data.username;
    let password = crypto(data.password);
    let token = createToken(data.username);
    await new Promise((resolve, reject) => {
        User.find({ username }, (err, data) => {
            if (err) return reject(err);
            if (data.length === 0) return resolve(data);
            if (data[0].password === password) {
                data[0].token = token;
                data.save((errors, data) => {
                    if (errors) return reject(errors);
                });
                return resolve(data);
            };
            resolve([]);// 密码错误
        });
    }).then(data => {
        if (data[0].length !== 0) {
            ctx.body = {
                loginSuccess: true,
                token: data[0].token
            };
        } else if (data[0].length === 0) {
            // 密码错误
            ctx.body = {
                loginSuccess: false
            };
        } else {
            // 用户名不存在
            ctx.body = {
                userExisted: false
            };
        }
    }).catch(errors => {
        ctx.body = {
            loginSuccess: false
        };
    });
};

exports.res = async ctx => {
    let data = ctx.request.body;
    let username = data.username;
    let password = crypto(data.password);
    let token = createToken(data.username);
    await new Promise((resolve, reject) => {
        User.find({ username }, (err, data) => {
            if (err) return reject(err);
            if (data.length !== 0) return resolve(data);// 用户名已存在
            const _user = new User({
                username,
                password,
                token
            });
            _user.save((err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        });
    }).then(data => {
        console.log(data);
        if (!data) {
            ctx.body = {
                resSuccess: true
            };
        } else {
            // 已存在
            ctx.body = {
                userExisted: true
            };
        }
    }).catch(errors => {
        ctx.body = {
            resSuccess: false
        };
    });
};
