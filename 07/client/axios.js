import axios from 'axios';
import createStore from './store/store';

const state = createStore().state;

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

axios.interceptors.request.use = instance.interceptors.request.use;

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
