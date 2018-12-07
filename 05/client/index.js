import Vue from 'vue';

import '../assets/css/base.css';
import App from './app.vue';

// Vue.prototype.$ = jQuery;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: (h) => h(App)
});
