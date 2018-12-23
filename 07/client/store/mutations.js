export default {
    pushData(state, data) {
        state.itemArr.unshift(data);
    },
    removeData(state, index, amount = 1) {
        state.itemArr.splice(index, amount);
    }
};
