import Vue from 'vue';
import App from './app.vue';

import './assets/css/base';
import Header from './todo/header.vue';

Vue.component('Header', Header);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: (h) => h(App)
});
