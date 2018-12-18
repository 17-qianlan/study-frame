import Login from '../study/users/login';
import Res from '../study/users/registered';
import Index from '../study/views/nav-list';

import store from '../store/store';

// import tool from '../assets/js/tool';

console.log(store().state);

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
            // let state = tool.getItem('username', 1);
            // console.log(to);
            // console.log(from);
            // console.log(this);
            // store.commit('updateShowLoginState', !state);
            next();
        }
    }
];
