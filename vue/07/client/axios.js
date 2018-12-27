import axios from 'axios';
import createStore from './store/store';
import createRouter from './router/router';

const state = createStore().state;
const store = createStore();

const router = createRouter();

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
        return config;
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
        if (errors.response) {
            switch (errors.response.status) {
                case 401 :
                    store.commit.userLogout();// 清除token和username以及以后会拓展的头像
                    router.replace({
                        path: '/control/login',
                        query: { redirect: router.currentRoute.fullPath }
                    });
            };
        }
        return Promise.reject(errors.response);
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
