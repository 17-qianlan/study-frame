import tool from '../assets/js/tool';

export default {
    pushData(state, data) {
        state.itemArr.unshift(data);
    },
    removeData(state, index, amount = 1) {
        state.itemArr.splice(index, amount);
    },
    cleanCompleted(state) {
        // state.itemArr.splice(0, state.itemArr.length);
        let arr = state.itemArr;
        arr.forEach((item, index) => {
            if (item.completed) arr.splice(index, 1);
        });
    },
    userLogout(state) {
        // Remove token and username
        tool.removerItem('token');
        tool.removerItem('username');
    },
    userLogin(state, opts) {
        // Save token and username
        state.token = opts.token;
        state.username = opts.username;
    }
};
