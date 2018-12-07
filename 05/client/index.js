import Vue from 'vue';

import '../assets/css/base.css';
import App from './app.vue';
import '../assets/js/jQuery.js';
/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: (h) => h(App)
});
