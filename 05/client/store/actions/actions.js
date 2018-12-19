import * as types from '../types/types';
import api from '../../axios';

/* export default {
    UserLogin({ commit }, data) {
        commit(types.LOGIN, data);
    },
    UserLogout({ commit }, data) {
        commit(types.LOGOUT, data);
    }
}; */

export default {
    UserLogin({ commit }, data) {
        return new Promise((resolve, reject) => {
            api.userLogin(data).then(({ data }) => {
                if (data.loginSuccess) {
                    commit(types.LOGIN, data);
                    resolve(data.loginSuccess);
                } else if (data.userExisted) { // 提示用户名不存在
                    resolve(data.userExisted);
                } else if (data.wrongPassword) { // 提示密码错误
                    resolve(data.wrongPassword);
                };
            }).catch(errors => {
                console.log(errors);
            });
        });
    }
};
