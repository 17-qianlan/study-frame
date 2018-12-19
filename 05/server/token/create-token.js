const jwt = require('jsonwebtoken');

module.exports = (userId) => {
    const token = jwt.sign({
        user_id: userId
    }, 'sinner77', {
        expiresIn: '1h'
    });
    return token;
};
