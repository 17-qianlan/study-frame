import Axios from 'axios';
import createStore from './store/store';

const state = createStore().state;

Axios.defaults.timeout = 5000;
Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

const instance = Axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

Axios.interceptors.request.use = instance.interceptors.request.use;

// request拦截器
instance.interceptors.request.use(
    config => {
        if (state.token) {
            config.headers.Authorization = `token${state.token}`;
        }
    },
    errors => {
        return Promise.reject(errors);
    }
);

// response
instance.interceptors.response.use(
    response => {
        return response;
    },
    errors => {
        if (errors.response.status) {

        }
    }
);

export default {
    userLogin(data) {
        return instance.post('/user/login', data);
    },
    userRes(data) {
        return instance.post('/user/res', data);
    }
};
