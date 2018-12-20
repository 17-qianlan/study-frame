import Login from '../study/users/login';
import Res from '../study/users/registered';
import Index from '../study/views/nav-list';

import store from '../store/store';

import tool from '../assets/js/tool';

let state = store().state;

export default [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/control/login',
        component: Login
    },
    {
        path: '/control/res',
        component: Res
    },
    {
        path: '/index',
        component: Index,
        beforeEnter(to, from, next) {
            let isState = tool.getItem('user', 1);
            console.log(isState);
            if (isState) {
                // state.commit('updateShowLoginState', false);
                state.isShowLoginState = false;
                next();
            } else {
                state.isShowLoginState = true;
                next('/control/login');
            }
        }
    }
];
