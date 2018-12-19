import * as types from '../types/types';
import tool from '../../assets/js/tool';
export default {
    updateShowLoginState(state, boolean = true) {
        state.isShowLoginState = boolean;
    },
    [types.LOGIN](state, data) {
        state.token = data.token;
        state.username = data.username;
        tool.setItem('username', data.username);
        tool.setItem('token', data.token);
    },
    [types.LOGOUT](state) {
        tool.removerItem('username');
        tool.removerItem('token');
    }
};
