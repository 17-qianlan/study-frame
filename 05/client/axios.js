import axios from 'axios';
import store from './store/store';
import router from './router/router';

const state = store().state;
const createRouter = router();

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

console.log(instance.interceptors.request.use, axios.interceptors.request.use);
axios.interceptors.request.use = instance.interceptors.request.use;
console.log(instance.interceptors.request.use, axios.interceptors.request.use);

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

// response拦截器
instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    state.dispatch('UserLogout');
                    createRouter.replace({
                        path: '/control/login', // 这里可能需要重新登录
                        query: { // 登录成功跳转到当前路由
                            redirect: createRouter.currentRoute.fullPath
                        }
                    });
            }
        }
        return Promise.reject(error.response);
    }
);

export default {
    userRes(data) {
        return instance.post('/user/res', data);
    },
    userLogin(data) {
        return instance.post('user/res', data);
    },
    userLogout(data) {
        return instance.post('user/logout', data);
    }
};
