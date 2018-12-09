import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';

import './assets/css/base.css';
import App from './app.vue';
import './assets/js/jQuery.js';

import createRouter from '../router/router';

Vue.use(VueRouter);
Vue.prototype.axios = Axios;
const router = createRouter();
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: (h) => h(App)
});
