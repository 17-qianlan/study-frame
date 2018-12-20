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
    UserLogin({ commit }, opts) {
        return new Promise((resolve, reject) => {
            api.userLogin(opts).then(({ data }) => {
                if (data.loginSuccess) {
                    data.username = opts.username;
                    commit(types.LOGIN, data);
                } else if (data.userExisted || data.wrongPassword) {
                    commit(types.LOGOUT);
                };
                resolve(data);
            }).catch(errors => {
                reject(errors);
            });
        });
    },
    UserLogout({ commit }, data) {
        commit(types.LOGOUT, data);
    }
};
