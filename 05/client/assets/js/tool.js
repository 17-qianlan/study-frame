export default {
    pattern: {
        'user': /^[a-zA-Z0-9]\w{4,10}$/,
        'password': /^\w{6,16}$/,
        'tel': /^1[345678]\d{9}$/,
        'Email': /^[a-zA-Z0-9_-]+@[a-z]+(\.[a-z]+)$/,
        'thousand': /B(?=(\d{3})+$)/g
    }
};
