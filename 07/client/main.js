import Vue from 'vue';
import App from './app.vue';

import createStore from './store/store';
import createRouter from './router/router';

import './assets/css/base';
import Header from './todo/header';
import Input from './todo/todo-input';
import Tabs from './todo/tabs';

const store = createStore();
const router = createRouter();

Vue.component('Header', Header);
Vue.component('todoInput', Input);
Vue.component('Tabs', Tabs);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: (h) => h(App)
});
