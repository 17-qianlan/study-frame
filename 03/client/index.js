import Vue from "vue"
import VueRouter from "vue-router"

import App from "./app.vue"
import createRouter from "./config/router/router.js"

Vue.use(VueRouter);
const router = createRouter();

new Vue({
    el : "#app",
    router: router,
    render : (h) => h(App)
});