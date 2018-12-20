import * as types from '../types/types';
import tool from '../../assets/js/tool';

export default {
    updateShowLoginState(state, boolean = true) {
        state.isShowLoginState = boolean;
    },
    [types.LOGIN](state, data) {
        tool.setItem('user', data);
    },
    [types.LOGOUT](state) {
        tool.removerItem('username');
        tool.removerItem('token');
    }
};
