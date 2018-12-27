const { Schema } = require('./config');

const userSchema = new Schema({
    username: String,
    password: String,
    token: String
}, {
    versionKey: false
});
module.exports = userSchema;
