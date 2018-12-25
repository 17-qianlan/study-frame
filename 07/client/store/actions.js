/*
import api from '../axios';

export default {
    UserLogout({ commit }) {
        commit('userLogout');
    },
    UserLogin({ commit }, opts) {
        return new Promise((resolve, reject) => {
            api.userLogin(opts).then(({ data }) => {
                // Writer userLogin
                return resolve(data);
            }).catch(errors => {
                return reject(errors);
            });
        });
    },
    UserRes(opts) {
        return new Promise((resolve, reject) => {
            api.userRes(opts).then(({ data }) => {
                // Writer userRes
                return resolve(data);
            }).catch(errors => {
                return reject(errors);
            });
        });
    }
};
*/
