import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import Vuex from 'vuex';

import './assets/css/base.css';
import App from './app.vue';
import './assets/js/jQuery.js';
import NavList from './study/views/nav-list';
import Alert from './study/components/alert';
import LoginState from './study/components/login-state';

import createRouter from './router/router';
import createStore from './store/store';

Vue.component('navList', NavList);
Vue.component('alert', Alert);
Vue.component('loginState', LoginState);
Vue.prototype.axios = Axios;

Vue.use(Vuex);
Vue.use(VueRouter);

const router = createRouter();
const store = createStore();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
});
