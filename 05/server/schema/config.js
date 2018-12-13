const mongoose = require('mongoose');

const db = mongoose.createConnection('mongodb://localhost:27017/study', {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

db.on('err', () => {
    console.log('连接失败');
});

db.on('open', () => {
    console.log('连接成功');
});

module.exports = {
    db,
    Schema
};
