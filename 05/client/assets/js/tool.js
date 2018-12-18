export default {
    pattern: {
        'user': /^[a-zA-Z0-9]\w{4,10}$/,
        'password': /^\w{6,16}$/,
        'tel': /^1[345678]\d{9}$/,
        'Email': /^[a-zA-Z0-9_-]+@[a-z]+(\.[a-z]+)$/,
        'thousand': /B(?=(\d{3})+$)/g
    },
    getItem(key, expire) {
        let data = JSON.parse(window.localStorage.getItem(key));
        if (!data) return false;
        let nowTime = new Date().getTime();
        expire = expire * 1e3 * 60 * 60;
        let val = '';
        if (nowTime - data.time >= expire) {
            window.localStorage.removeItem(key);
        } else {
            val = data.val;
            window.localStorage.setItem(key, JSON.stringify({
                key: val,
                time: nowTime
            }));
        }
        return val;
    },
    setItem(key, val) {
        let currentTime = new Date().getTime();
        window.localStorage.setItem(key, JSON.stringify({
            val,
            time: currentTime
        }));
    }
};
